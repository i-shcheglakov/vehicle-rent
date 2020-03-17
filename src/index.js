import React, { Component } from 'react'
import { 
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import {
  Icon
} from 'react-native-elements'
import { 
  createDrawerNavigator, 
  DrawerContentScrollView, 
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MapScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 60}}>
        <TouchableOpacity
          style={{
            borderColor: 'rgba(0,0,0,0.1)',
            borderWidth: 1,
            alignItems:'center',
            justifyContent:'center',
            width: 50,
            height: 50,
            backgroundColor:'#fff',
            borderRadius:50,
            margin: 15
          }}
          onPress={() => navigation.toggleDrawer()}
        >
          <Icon name={'menu'} size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Map Screen</Text>
      </View>
    </View>
  );
}

function PaymentScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Payment Screen</Text>
    </View>
  );
}

function RideHistoryScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Ride History Screen</Text>
    </View>
  );
}

function HelpScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Help Screen</Text>
    </View>

  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
    </View>

  );
}

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
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => CustomDrawerContent(props)}>
        <Drawer.Screen name="Home" component={HomeScreen}/>
      </Drawer.Navigator>
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
