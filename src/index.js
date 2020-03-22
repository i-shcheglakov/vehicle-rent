import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import HelpScreen from './components/HelpScreen';
import MapScreen from './components/MapScreen';
import PaymentScreen from './components/PaymentScreen';
import QRCodeScannerScreen from './components/QRCodeScannerScreen';
import RideHistoryScreen from './components/RideHistoryScreen';
import SettingsScreen from './components/SettingsScreen';
import LoginScreen from './screens/LoginScreen';

import { 
  createDrawerNavigator, 
  DrawerContentScrollView, 
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <View style={{margin: 30}}>
          <Text style={{color: 'white', fontSize: 20}}>Hello, rider!</Text>
        </View>
        <View>
        </View>
      </View>
      <View style={styles.drawerItems}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Payment')}>
          <Text style={styles.drawerItem}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('RideHistory')}>
          <Text style={styles.drawerItem}>Ride History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <Text style={styles.drawerItem}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Help')}>
          <Text style={styles.drawerItem}>Help</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.drawerFooter}>
      </View>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <Stack.Navigator initialRouteName='Map'>
      <Stack.Screen name='Map' component={MapScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Payment' component={PaymentScreen}/>
      <Stack.Screen name='RideHistory' component={RideHistoryScreen}/>
      <Stack.Screen name='Help' component={HelpScreen}/>
      <Stack.Screen name='Settings' component={SettingsScreen}/>
      <Stack.Screen name='QRCodeScanner' component={QRCodeScannerScreen}/>
    </Stack.Navigator>
  );
}

function HomeScreenDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => CustomDrawerContent(props)}>
      <Drawer.Screen name="Home" component={HomeScreen}/>
    </Drawer.Navigator>
  );
}

function Main() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='Home' component={HomeScreenDrawer}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: 'black',
    height: 200,
  },
  drawerItems: {
    paddingVertical: 20
  },
  drawerFooter: {
    alignItems: 'center',
    backgroundColor: 'black'
  },
  drawerItem: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    fontSize: 18
  }
});
