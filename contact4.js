import React, {Component ,useState} from 'react';
import { Text, View, StyleSheet,StatusBar,Button, ListView, ImageBackground,Picker,ScrollView } from 'react-native';
import {  AntDesign,SimpleLineIcons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import { Container, Content, Header, Form, Input, Item, Label, Icon, List, ListItem } from 'native-base';

import { FontAwesome5 } from '@expo/vector-icons'; 
import { TextInput,Avatar,Title,Caption,TouchableRipple,Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Contact4 =({navigation}) => {

  //  const [selectedValue, setSelectedValue] = useState("Select");
    return (

      <ScrollView >
    <ImageBackground source={{uri:'https://i2.wp.com/www.drburgener.com/wp-content/uploads/2016/12/palazzo-versace.jpg?w=1080'}}
      style={{height:"95%",width:"100%",marginTop:90}}>
      
  <SimpleLineIcons style={styles.container}name="menu" size={25}  backgroundColor="#fff" color="purple" onPress={()=>navigation.openDrawer()}/><SimpleLineIcons/>
         

          <View style={styles.overlayContainer}>
         
              <View style={styles.top}>
               <TouchableOpacity>
               <Text style={styles.header}>H O M E</Text></TouchableOpacity>
              </View>
              <TouchableOpacity>
              <TextInput  
                    style={styles.input} 
                    placeholder="What are you looking for?"
                    
       />
               </TouchableOpacity>
          </View>
         
      
      </ImageBackground>
      <View>

      <Text style={styles.header2}>H O M E</Text>
      </View>
        <View style={styles.divider}>
 
    <Divider /></View>
      <View>


<Text style={styles.header3}>Welcome to Wedding Planner </Text>
</View>


      </ScrollView>
      
  
      


      );
    
  }
  export default Contact4;
  
  const styles=StyleSheet.create({


    container: {
        
        alignContent:'center',
        position:"absolute",
     
        bottom:436,
        color:'black',
         
      
    
      
    },
    overlayContainer:{
flex:1,
marginBottom:140,
backgroundColor:'rgba(125,200,200,.0)',

    }
  ,
  top:{
height:'100%',
alignContent:'center',
alignItems:'center',

  },
header:{

color:'#fff',
fontSize:15,
borderColor:'#fff',
borderWidth:1.5,
borderRadius:10,
padding:10,
margin:17,

backgroundColor:'rgba(165,163,218,.0)',
},
header2:{

  color:'black',
  fontSize:20,
  borderColor:'#fff',
  borderWidth:0,
  borderRadius:1,
 // padding:10,
 // margin:20,
  alignItems:'center',
  alignContent:'center',

  },
  header3:{

    color:'black',
    fontSize:15,
    borderColor:'#fff',
    borderWidth:0,
    borderRadius:1,
   // padding:10,
   // margin:20,
    alignItems:'center',
    alignContent:'center',
  
    },
  

menuIcon:{

    position:"absolute",
   top:25,
   left:10,
    color:'black',
    
   },
   pickerButton:{
    backgroundColor: '#953CE0',
            padding:15,
            width : "50%",
            alignItems:"center",
            borderRadius: 35,
            borderWidth: 0,
            marginRight: 5,
            marginLeft: 5,
            marginBottom:10,
            top:80
  
  
  },
  pickerButtonTextColor:{
    
    color:'white',
    fontSize:18
            
  },

  input:{
    
    width : "63%",
 marginLeft:65,
    backgroundColor: '#E4E4E4',
    
    },
    

  });