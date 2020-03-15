import React, { Component } from 'react'
import { 
  Button,
  StyleSheet,
  Text,
  View 
} from 'react-native'

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Text style={{color: 'white'}}>This is text</Text>
      </View>
      <View style={styles.drawerItems}>
        <DrawerItemList {...props} />
        <DrawerItem label='Help' onPress={()=> alert("Not implemented")}/>
      </View>
      <View style={styles.drawerFooter}>
        <Text style={{textAlign: 'center'}}>Version 0.9</Text>
      </View>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title='Go to notifications'
      />
    </View>
  );
}

function NotificationScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.goBack()}
        title='Go back home'/>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => CustomDrawerContent(props)}> 
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Notifications" component={NotificationScreen}/>
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
    flex: 1
  },
  drawerItems: {

  },
  drawerFooter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  }
});