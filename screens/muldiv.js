import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class muldiv extends React.Component{
constructor(props){
    super(props);
    this.state={
        mul1:"",
        mul2:"",
        div1:"",
        div2:""
    }
}


// componentWillMount(){}
    render(){
    const multi=this.props.navigation.getParam("multi","")
    const divi=this.props.navigation.getParam("divi","")
    return(
      <View style={styles.Container}>
        
      <Text style={styles.display}>
        {this.multi}</Text>
        <Text style={styles.display}>
        {this.divi}</Text>
      </View>
    );
}
}

const styles = StyleSheet.create({
    Container :{
    justifyContent: 'center',
    flex:1,
    margin: 10,
    flexDirection:"row"
    },
    display:{
  fontSize:20,
  margin:10
    }
})