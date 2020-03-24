import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './Drawer';
import Auth from './Auth';

export default function App() {
  return (
    <NavigationContainer>
      <Auth/>
    </NavigationContainer>
  );
}
