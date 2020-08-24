import React, {Component } from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator } from './MainStack';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Contact from './contact';
import Contact2 from './contact2';
import Contact3 from './contact3';
import Contact4 from './contact4';

const Drawer = createDrawerNavigator();



const DrawerNavigator = () => {
  const dimensions=useWindowDimensions();
  return (
    <Drawer.Navigator    
  >
    
    <Drawer.Screen name="Home" component={Contact4}/>
    <Drawer.Screen name="Planning tools" component={Contact2} />
    <Drawer.Screen name="Profile" component={Contact} />
    <Drawer.Screen name="Suppliers" component={Contact4}/>
  </Drawer.Navigator>
  );
};

export default DrawerNavigator;

