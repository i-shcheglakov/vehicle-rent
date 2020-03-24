import React from 'react';
import { 
  Text,
  View,
  StyleSheet
} from 'react-native';
import { 
  createDrawerNavigator,
  DrawerContentScrollView, 
  DrawerItem
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import HelpScreen from './components/HelpScreen';
import MapScreen from './components/MapScreen';
import PaymentScreen from './components/PaymentScreen';
import QRCodeScannerScreen from './components/QRCodeScannerScreen';
import RideHistoryScreen from './components/RideHistoryScreen';
import SettingsScreen from './components/SettingsScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation, route }) => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Map' component={MapScreen}/>
      <Stack.Screen name='Payment' component={PaymentScreen}/>
      <Stack.Screen name='RideHistory' component={RideHistoryScreen}/>
      <Stack.Screen name='Help' component={HelpScreen}/>
      <Stack.Screen name='Settings' component={SettingsScreen}/>
      <Stack.Screen name='QRCodeScanner' component={QRCodeScannerScreen}/>
    </Stack.Navigator>
  );
}

const DrawerContent = props => {
  console.log(props.route.params);
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>Hello, {props.route.params.userName}!</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItem 
          label='Payment'
          onPress={() => props.navigation.navigate('Payment')}
          icon={() => <MaterialIcon name='payment' size={16}/>}
        />
        <DrawerItem
          label='Rider History'
          onPress={() => props.navigation.navigate('RideHistory')}
          icon={() => <MaterialIcon name='history' size={18}/>}
        />
        <DrawerItem 
          label='Settings'
          onPress={() => props.navigation.navigate('Settings')}
          icon={() => <Feather name='settings' size={16}/>}
        />
        <DrawerItem 
          label='Help'
          onPress={() => props.navigation.navigate('Help')}
          icon={() => <Feather name='help-circle' size={16}/>}
        />
        <DrawerItem 
          label='Logout'
          onPress={() => {props.route.params.signOut()}}
          icon={() => <Feather name='help-circle' size={16}/>}
        />

      </DrawerContentScrollView>
    </View>
  );
}

export default ({route}) => {
  return (
    <Drawer.Navigator
      initialRouteName='Map'
      drawerContent={(props) => DrawerContent({...props, route})}
    >
      <Drawer.Screen name='Screens' component={Screens}/>
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading: {
    flex: 0.4,
    backgroundColor: 'black'
  },
  title: {
    color: 'white',
    margin: 20,
    fontSize: 18
  }
});