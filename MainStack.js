import React, {Component } from 'react';
import {  StyleSheet, Text, View, TextInput, Button,TouchableOpacity} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import Home2 from './login';
import Home3 from './signup';
import Contact from './contact';
import Contact2 from './contact2';
import Contact3 from './contact3';
import Contact4 from './contact4';
import loginVendor from './loginVendor';
import signupVendor from './signupVendor';
import vendorProfile from './vendorProfile';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,}}>
      <Stack.Screen name="Home" component={Home2} />
      <Stack.Screen name="About" component={Home3} />
      <Stack.Screen name="loginVendor" component={loginVendor} />
      <Stack.Screen name="signupVendor" component={signupVendor} />
      <Stack.Screen name="vendorProfile" component={vendorProfile} />
      <Stack.Screen name="Dashboard" component={DrawerNavigator} />
      <Stack.Screen name="Contact" component={Contact}/>
      <Stack.Screen name="Contact2" component={Contact2} />
      <Stack.Screen name="Contact3" component={Contact3} />
      
      
    </Stack.Navigator>
  );
}
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#953CE0",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};



export  {MainStackNavigator};