import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './Drawer'

export default function App() {
  return (
    <NavigationContainer>
      <Drawer/>
    </NavigationContainer>
  );
}
