import React from 'react';
import { StyleSheet, TextInput, View, Text,TouchableOpacity,TouchableWithoutFeedback ,Keyboard} from 'react-native';
export default class login extends React.Component{ 	
constructor(props) {
 super(props);
    this.state = {
      UserEmail: '',
      UserPassword: '',
    }
 }
render(){
    return(
        <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss;
        }}>
        <View style={styles.MainContainer}>
        <TextInput
        placeholder="Enter User Name"
        onChangeText={UserName => this.setState({UserName})}
        style={styles.TextInputStyleClass} />
        <TextInput
        placeholder="Enter Password"
        onChangeText={UserPassword => this.setState({UserPassword})}
        style={styles.TextInputStyleClass} />
        <View style={styles.btncontainer}>      
         <TouchableOpacity
        style={styles.btn}
        onPress={()=>{
            this.props.navigation.navigate("dashboard")
        }}>
        <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.btn}
        onPress={()=>{
            this.props.navigation.navigate("registration")
        }}>
        <Text>registration</Text>
        </TouchableOpacity>
        </View>
        </View>
        </TouchableWithoutFeedback>
    )
}
}
const styles = StyleSheet.create({
     
    MainContainer :{
     
    justifyContent: 'center',
    flex:1,
    margin: 10
    },
     
    TextInputStyleClass: {
     
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
   borderColor: '#2196F3',
      borderRadius: 5 ,
    },
    btncontainer:{
        flex:1,
        
    },
    btn:{
        borderColor: '#2196F3',
        textAlign: 'center',
         backgroundColor:"#BA2F16",
        margin:40,
        padding:10,
        borderRadius: 5 ,
    }
     
    });
