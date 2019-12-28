import React from 'react';
import {View,StyleSheet,TextInput,TouchableOpacity,Alert,TouchableWithoutFeedback,Text,Keyboard} from 'react-native';

export default class dashboard extends React.Component{
constructor(props){
  super(props);
  this.state={
      firstnum:"",
      secondnum:"",
      thirdnum:"",
      fourthnum:"",
      addnum:""
      
  }
   this.addi=this.addi.bind(this)
}
addi(res){
    const {firstnum,secondnum}=this.state
    res= +firstnum + +secondnum
    
    return res
}
// addrow = () =>{
//     const {firstnum,secondnum,addnum}=this.state
//     addnum= +firstnum + +secondnum
//     this.setState({addnum})
    
// }

// componentWillMount(){
// sumeth = addres =>{
//     const {firstnum,secondnum}=this.state
//     if(firstnum !== "empty"&& secondnum !=="empty"){
//     addres= firstnum + secondnum
//     return addres
//     }
//     else{
//      Alert.alert("values are empty")
//     }},
// submi = subli =>{
//     const {thirdnum,fourthnum}=this.state
//     if(fourthnum !== "empty"&& thirdnum !=="empty"){
//     subli= thirdnum - fourthnum
//     return subli
//     }
//     else{
//      Alert.alert("values are empty")
//     }},
// multi = resu=>{
//     const {firstnum,secondnum}=this.state
//     if(firstnum !== "empty"&& secondnum !=="empty"){
//     resu= firstnum * secondnum
//     return resu
//     }
//     else{
//      Alert.alert("values are empty")
//     }
// },
// divi = resu => {
//     const {firstnum,secondnum}=this.state
//     if(fourthnum !== "empty"&& thirdnum !=="empty"){
//          resu= thirdnum / fourthnum
//          return resu
//     }
//     else{
//      Alert.alert("values are empty")
//     }
// }
// }

render()
{
        const {firstnum,secondnum,thirdnum,fourthnum} = this.state;
    return(
        <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss;
        }}>
      <View style={styles.Container}>
        <TextInput 
          style={styles.input}
          placeholder="enter your first value here" 
          onChangeText={firstnum => this.setState({firstnum})} 
          keyboardType = "number-pad"
        />
        <TextInput 
          style={styles.input}
          placeholder="enter your second value here" 
          onChangeText={secondnum => this.setState({secondnum})} 
          keyboardType = "number-pad"
        />
        <TextInput 
          style={styles.input}
          placeholder="enter your third value here"
          keyboardType = "number-pad" 
          onChangeText={thirdnum => this.setState({thirdnum})} 
        />
        <TextInput 
          style={styles.input}
          placeholder="enter your fourth value here"
          keyboardType = "number-pad" 
          onChangeText={fourthnum => this.setState({fourthnum})} 
        />
        <Text>{this.addi()}</Text>
        <TouchableOpacity
         style={styles.button}
         onPress={()=>{
             this.props.navigation.navigate("subadd",{
                //  sumeth:this.sumeth,
                //  submi:this.submi
                 add:this.addi,
                 firstnum:firstnum,
                 secondnum:secondnum,
                 thirdnum:thirdnum,
                 fourthnum:fourthnum

             })
         }}>
        <Text>add or sub</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button}
         onPress={()=>{
             this.props.navigation.navigate("muldiv",{
                //  multi:this.multi,
                //  divi:this.divi
                firstnum:this.firstnum,
                secondnum:this.secondnum,
                thirdnum:this.thirdnum,
                fourthnum:this.fourthnum
             })
         }}>
        <Text>multi or div</Text>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
    );
}
}
const styles = StyleSheet.create({
     
    Container :{
     
    justifyContent: 'center',
    flex:1,
    margin: 10
    },
    button:{
        borderColor: '#2196F3',
        textAlign: 'center',
         backgroundColor:"#BA2F16",
        marginTop:40,
        padding:10,
        borderRadius: 5 ,

    },
    input:{
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
       borderColor: '#2196F3',
          borderRadius: 5 ,
    }
})