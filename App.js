import { StatusBar } from 'expo-status-bar';
import React, {Component } from 'react';
import { NavigationContainer} from '@react-navigation/native';


import { MainStackNavigator } from './MainStack';


 const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
};
export default App