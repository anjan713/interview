import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';

export default class subadd extends React.Component{
    
    static navigationOptions = {
        title: "Tab1"
      };  
      addi(res){
        const firstnum=this.firstnum
        const secondnum=this.secondnum
        res= +firstnum + +secondnum
        
        return res
    }
    render(){
    // const sumeth=this.props.navigation.getParam("sumeth","")
    // const submi=this.props.navigation.getParam("submi","")
    const addr=this.props.navigation.getParam("add","")
    const firstnum=this.props.navigation.getParam("firstnum","0")
    const secondnum=this.props.navigation.getParam("secondnum","")
    return(
      <View style={styles.Container}>
        
       
        <TouchableOpacity
        placeholder="hot problem">
        <Text style={styles.display}>
        {firstnum}</Text>
        </TouchableOpacity>
        <Text style={styles.display}>
        {addr}</Text>
        <Text style={styles.display}>
        {this.addi()}</Text>
        
      </View>
    );
}
}


const styles = StyleSheet.create({
     
    Container :{
     
    justifyContent: 'center',
    flex:1,
    margin: 10
    },
    display:{
        fontSize:20,
  margin:10,
  backgroundColor:"#F4C724"
    }
})