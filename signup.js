import React, {Component } from 'react';
import {  StyleSheet, Text, View, TextInput, Button,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import * as firebase from 'firebase';
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBuv2LEMnTCDa833gUhVy3UlFv9ZN3GQv8",
    authDomain: "newproject-cdc49.firebaseapp.com",
    databaseURL: "https://newproject-cdc49.firebaseio.com",
    projectId: "newproject-cdc49",
    storageBucket: "newproject-cdc49.appspot.com",
    messagingSenderId: "539908414625",
    appId: "1:539908414625:web:12dd1c0837ce558e00e4e0",
    measurementId: "G-G50Z37L5B8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 

export default class Home3 extends React.Component  {
 
    constructor(props){
super(props)

this.state=({

email:'',
password:''

})
    }

signUpUser=(email,password)=>{

try{
if(this.state.password.length < 6){

alert("enter atleast 6 digits")
return;

}
firebase.auth().createUserWithEmailAndPassword(email, password)
}
catch(error){

console.log(error.toString())

}

}

 render(){
    return (
      <View style={styles.container}>
 
      <Text style={styles.login}>Create your account</Text>
    
      <TextInput  
      style={styles.input} 
      placeholder="Email address"
      onChangeText={(email)=>this.setState({email})}
       />
  <TextInput  
      style={styles.input} 
      placeholder="Type your password"
      secureTextEntry
      onChangeText={(password)=>this.setState({password})}
      
       />
  
      <View style={styles.btnContainer}>
  <TouchableOpacity style={styles.userBtn}
  onPress={()=>this.signUpUser (this.state.email,this.state.password)}
  >
  
  <Text style={styles.btnText}> Register now</Text>
  
  </TouchableOpacity>
  
  
  
  
      </View>
     
      </View>
    )
  }
}
 
const styles=StyleSheet.create({


  container: {
      
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    

  },



center: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  

},

title:{

    fontSize:36,
marginBottom: 25,
},

login:{
  
    padding:10,
    margin: 10.,
    fontSize: 30,
    color: 'black',
    
    },
    
    input:{
    
    width : "90%",
    padding:15,
    backgroundColor: '#E4E4E4',
    marginBottom:15,
    },

    su:{

      color: '#953CE0',
      fontWeight:'500',
      fontSize: 14,
      padding:12,
      marginBottom:10,
      
      
             },

   btnContainer:{
      
              flexDirection: 'row',
              justifyContent: "center",
              alignItems:"center",
              width:"100%",
              
              },
              
              userBtn:{
                backgroundColor: '#F56F6F',
                padding:15,
                width : "90%",
                alignItems:"center",
                borderRadius: 25,
                borderWidth: 0,
                marginRight: 5,
                marginLeft: 5,
              },
              
              btnText:{
                
              color:'white',
                fontSize: 18,
              
              
              },


});
  
  //export default Home3;