import React, {Component ,useState} from 'react';
import { Text, View, StyleSheet,StatusBar,Button, ListView, ImageBackground, } from 'react-native';
import {  AntDesign,SimpleLineIcons,Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import { Container, Content, Header, Form, Input, Item, Label, Icon, List, ListItem } from 'native-base';

import { FontAwesome5 } from '@expo/vector-icons'; 
import { TextInput,Avatar,Title,Caption,TouchableRipple,Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Contact3 =() => {

  
    return (

    <View style={styles.container}>
     <View style={{Margin:20}}>
      <View style={{alignItems:'center'}}>
      <TouchableOpacity>
      <View style={{height:180,width:100,borderRadius:15,justifyContent: 'center',alignItems:'center'}}>

      <ImageBackground source={{uri:'https://www.w3schools.com/w3images/avatar2.png'}}
      style={{height:100,width:100}}
      imageStyle={{borderRadius:15}}>
      <View>
       <Icon name="camera" size={22} color="black" 
       style={{opacity:0.55,alignItems:'center'
       ,justifyContent: 'center',
       borderWidth:1, 
       borderColor:"#fff",borderRadius:10}}>
       

       </Icon>   
      </View>

      </ImageBackground>
      </View>
                 
      </TouchableOpacity>
      <Text style={{marginTop:-25,marginLeft:7.5,fontSize:18,fontWeight:'bold'}}>Faiz ur Rehman</Text>
      </View>
      <View style={styles.actionIcon}>
          <FontAwesome name="user-o" size={25} style={{marginTop:15}}/>
          <TextInput 
             placeholder="First Name"
             backgroundColor="#F5F5F5"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
            
            ]}

          />
      </View>
      <View style={styles.actionIcon}>
          <FontAwesome name="user-o" size={25} style={{marginTop:15}}/>
          <TextInput 
             placeholder="Last name"
            
             backgroundColor="#F5F5F5"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
            
            ]}

          />
      </View>
      <View style={styles.actionIcon}>
          <FontAwesome name="phone" size={25} style={{marginTop:15}}/>
          <TextInput 
             placeholder="Phone Number"
             keyboardType="number-pad"
             backgroundColor="#F5F5F5"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
            
            ]}

          />
      </View>

      <View style={styles.actionIcon}>
          <FontAwesome name="envelope-o" size={25} style={{marginTop:15}}/>
          <TextInput 
             placeholder="Email"
             keyboardType="email-address"
             backgroundColor="#F5F5F5"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
            
            ]}

          />
      </View>

      <View style={styles.actionIcon}>
          <FontAwesome name="location-arrow" size={25} style={{marginTop:15}}/>
          <TextInput 
             placeholder="City"
             backgroundColor="#F5F5F5"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
            
            ]}

          />
      </View>
<View style={styles.btnContainer}>
      <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
</View>

    </View>  

   </View>
  


      );
    
  }
  export default Contact3;
  
  const styles=StyleSheet.create({


    container: {
        
      flex: 1,
      backgroundColor: 'white',
      
    },

    actionIcon: {
        flexDirection: 'row',
        marginTop: 8,
        //marginBottom: 5,
        marginLeft:6,
        borderBottomWidth: -20,
        borderBottomColor: '#f2f2f2',
        
        width : "90%",
        padding:-10,
        paddingLeft:18
      
              },
  
      textInput: {
        flex: 1,
        
        color: '#05375a',
       
     
      },

      btnContainer:{
          alignContent:'center',
      alignItems:'center',
        paddingLeft:90,
        paddingTop:10,
        width:"75%",
        
        },
        
        userBtn:{
            backgroundColor: '#F56F6F',
          paddingTop:20,
          paddingBottom:20,
          paddingRight:35,
          paddingLeft:35,
          width : "100%",
          alignContent:'center',
          alignItems:"center",
          borderRadius: 15,
          borderWidth: 0,
          marginRight: 20,
          marginLeft:20,
        },
        
        btnText:{
          
            backgroundColor: '#F56F6F',
            color:'white',
        fontSize: 17,
        color:'white',
        
        
        
        },
  });