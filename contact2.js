import React, {Component ,useState} from 'react';
import { View, Text,StyleSheet,Image,Picker,TouchableOpacity,ImageBackground} from 'react-native';
import {  AntDesign,SimpleLineIcons } from '@expo/vector-icons';
import{Icon, Button,Container,Header,Content,Left} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const Contact2 = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState("Select");

    return (
      
      <ImageBackground source={{uri:'https://i2.wp.com/www.drburgener.com/wp-content/uploads/2016/12/palazzo-versace.jpg?w=1080'}}
      style={{height:"50%",width:"100%",marginTop:2}}>
      
  <SimpleLineIcons style={styles.container}name="menu" size={25}  backgroundColor="#fff" color="purple" onPress={()=>navigation.openDrawer()}/><SimpleLineIcons/>
         

          <View style={styles.overlayContainer}>
         
              <View style={styles.top}>
               <TouchableOpacity>
               <Text style={styles.header}>Planning Tools</Text></TouchableOpacity>
              </View>
              <TouchableOpacity>
              <TextInput  
                    style={styles.input} 
                    placeholder="Select Tools"
                    
       />
               </TouchableOpacity>

               <Picker
        selectedValue={selectedValue}
        style={{ height: 120, width: "100%" }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select" value="0" />
        <Picker.Item label="Venue" value="venue" />
        <Picker.Item label="Marquees" value="Marquees" />
        <Picker.Item label="Suppliers" value="Marquees" />
        <Picker.Item label="Music/Band" value="Marquees" />
      </Picker>
      <TouchableOpacity style={styles.pickerButton}>
  
       <Text style={styles.pickerButtonTextColor}> Find now</Text>
  
       </TouchableOpacity>

          </View>
         
      
      </ImageBackground>
     /*
        <View style={styles.container}>
        <SimpleLineIcons style={styles.menuIcon}name="menu" size={22}  backgroundColor="#fff" color="purple" onPress={()=>navigation.openDrawer()}/><SimpleLineIcons/>
<Text  style={styles.contact2ScreenHeader}>
What are you looking for?</Text>

<Picker
        selectedValue={selectedValue}
        style={{ height: 150, width: "150%" }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select" value="0" />
        <Picker.Item label="Venue" value="venue" />
        <Picker.Item label="Marquees" value="Marquees" />
        <Picker.Item label="Suppliers" value="Marquees" />
        <Picker.Item label="Music/Band" value="Marquees" />
      </Picker>
      <TouchableOpacity style={styles.pickerButton}>
  
       <Text style={styles.pickerButtonTextColor}> Find now</Text>
  
       </TouchableOpacity>
       
             </View>*/
    );
  }
  

  
  export default Contact2;

  const styles=StyleSheet.create({


    container: {
        flex:1,
 
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },

    pickerButton:{
      backgroundColor: '#C381EE',
              padding:15,
              width : "50%",
              alignItems:"center",
              borderRadius: 0,
              borderWidth: 0,
              marginRight: 5,
              marginLeft: 90,
              marginBottom:10,
              top:80
    
    
    },

    menuIcon:{

      position:"absolute",
      top:20,
      left:12,
      color:'black',
      
     },

     pickerButtonTextColor:{
    
      color:'white',
      fontSize:16
              
    },
    
    overlayContainer:{
      flex:1,
      marginBottom:140,
      backgroundColor:'rgba(125,200,200,.0)',
      
          }
        ,
        top:{
      height:'80%',
      alignContent:'center',
      alignItems:'center',
      
        },
      header:{
      
      color:'#fff',
      fontSize:22,
      borderColor:'#fff',
      borderWidth:1.5,
      borderRadius:10,
      padding:8,
      margin:5,
      
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
  
  
  });