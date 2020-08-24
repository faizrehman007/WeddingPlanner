import React, {Component } from 'react';
import {  StyleSheet, Text, View, TextInput, Button,TouchableOpacity} from 'react-native';


 const signupVendor = ({ navigation }) => {


  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  //const { signIn } = React.useContext(AuthContext);


  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
}

const handlePasswordChange = (val) => {
  if( val.trim().length >= 8 ) {
      setData({
          ...data,
          password: val,
          isValidPassword: true
      });
  } else {
      setData({
          ...data,
          password: val,
          isValidPassword: false
      });
  }
}

const updateSecureTextEntry = () => {
  setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
  });
}

const handleValidUser = (val) => {
  if( val.trim().length >= 4 ) {
      setData({
          ...data,
          isValidUser: true
      });
  } else {
      setData({
          ...data,
          isValidUser: false
      });
  }
}

    return (
      <View style={styles.container}>
    
      <Text style={styles.login}> Create your account</Text>
      
      <TextInput  
      style={styles.input} 
      placeholder="Email / Company Name"
      onChangeText={(val) => textInputChange(val)}
      onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
       />
     { data.isValidUser ? null : 
            <Text style={styles.errorMsg}>Kindly fill in the empty field</Text>
           
     }
  <TextInput  
      style={styles.input} 
      placeholder="Password"
      secureTextEntry
     // secureTextEntry={data.secureTextEntry ? true : false}
      onChangeText={(val) => handlePasswordChange(val)}
       />
        { data.isValidPassword ? null : 
       <Text style={styles.errorMsg}>Password must be atleast 8 characters long</Text>}
      <View style={styles.btnContainer}>
  <TouchableOpacity style={styles.userBtn} >
  
  <Text style={styles.btnText}> Sign Up</Text>
  
  </TouchableOpacity>
      </View>
      
  
      </View>
    );
  };
  

  
  export default signupVendor;

  
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
      padding:18,
      backgroundColor: '#E4E4E4',
      marginBottom:15,
      },

      su:{

        color: '#F56F6F',
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
                  backgroundColor: '#C381EE',
                  padding:17,
                  width : "90%",
                  alignItems:"center",
                  borderRadius: 25,
                  borderWidth: 0,
                  marginRight: 5,
                  marginLeft: 5,
                  marginTop:5,
                },

                userBtnV:{
                  backgroundColor: '#F56F6F',
                  padding:17,
                  width : "90%",
                  alignItems:"center",
                  borderRadius: 25,
                  borderWidth: 0,
                  marginRight: 5,
                  marginLeft: 5,
                  marginTop:5,
                },
                
                btnText:{
                  
                color:'white',
                  fontSize: 18,
                
                
                },
                btnTextV:{
                  
                  color:'white',
                    fontSize: 18,
                  
                  
                  },

                errorMsg: {
                  color: '#FF0000',
                  fontSize: 12,
              },


  });

