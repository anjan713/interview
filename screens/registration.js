import React, { Component } from 'react';
 
import { StyleSheet, TextInput, View, Alert, Button, Text,TouchableOpacity } from 'react-native';
export default class registration extends Component{ 	
constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserName: '',
      UserEmail: '',
      UserPassword: '',
      UserPhoneNo:''
 
    }
 
  }

UserRegistrationFunction = () =>{
 
 
    const { UserName }  = this.state ;
    const { UserEmail }  = this.state ;
    const { UserPassword }  = this.state ;
    const { UserPhoneNo }  = this.state ;
    
    
    
   fetch('', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
       name: UserName,
    
       email: UserEmail,
    
       password: UserPassword,

       phone:UserPhoneNo,
    
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {
    
   // Showing response message coming from server after inserting records.
           Alert.alert(responseJson);
    
         }).catch((error) => {
           console.error(error);
         });
    
    
     }


    render() {
        return (
     
    <View style={styles.MainContainer}>
     
            <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>
      
            <TextInput
              
              
              placeholder="Enter User Name"
     
              onChangeText={UserName => this.setState({UserName})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
     
            <TextInput
              
              
              placeholder="Enter User Email"
     
              onChangeText={UserEmail => this.setState({UserEmail})}
     
            
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
     
            <TextInput
              
            
              placeholder="Enter User Password"
     
              onChangeText={UserPassword => this.setState({UserPassword})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
     
              secureTextEntry={true}
            />
            <TextInput
              
              
              placeholder="Enter Phone Number"
     
              onChangeText={ UserPhoneNo => this.setState({ UserPhoneNo})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
              />
     
            <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" />
          
            <TouchableOpacity
            style={styles.btn}
            onPress={()=>{
                this.props.navigation.navigate("dashboard")
            }}>
            <Text>Login</Text>
            </TouchableOpacity>
     
    </View>
                
        );
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
     
    // Set border Radius.
     //borderRadius: 10 ,
    },
    btn:{
      flex:1
    }
     
    });
     
    
     