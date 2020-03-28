import React, { Component } from 'react';
import {
  Alert,
  View,
  Button
} from 'react-native';
import { 
  GoogleSignin,
  statusCodes
} from '@react-native-community/google-signin';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen'
import Drawer from './Drawer'

const AuthStack = createStackNavigator();

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      error: null
    }
  }

  componentDidMount() {
    this._configureGoogleSignIn();
    this._getCurrentUser();
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId: '280811074813-3icd0fkbp8tl1e53tgfepj3lvijiondb.apps.googleusercontent.com',
      offlineAccess: false
    })
  }

  _getCurrentUser = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ 
        userInfo,
        error: null 
      });
    } catch (error) {
      const errorMessage = error.code === statusCodes.SIGN_IN_REQUIRED ? 'Please, sign in' : error.message;
      this.setState({
        error: new Error(errorMessage)
      });
    }    
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({
        userInfo,
        error: null
      });
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          Alert.alert('canceled');
          break;
        case statusCodes.IN_PROGRESS:
          Alert.alert('in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          Alert.alert('play services not available or outdated');
          break;
        default:
          Alert.alert('Something went wrong', error.toString());
          this.setState({
            error,
          })
      }
    }
  };

  _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      this.setState({
        userInfo: null,
        error: null
      });
    } catch (error) {
      this.setState({
        error,
      })
    }
  };

  render() {
    return (
      <AuthStack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
      >
        {this.state.userInfo ? (
          <AuthStack.Screen 
            name='Drawer'
            component={Drawer}
            initialParams={{
              signOut: this._signOut.bind(this),
              userName: this.state.userInfo.user.givenName
            }}
          />
        ) : (
          <AuthStack.Screen
            name='LoginScreen'
            component={LoginScreen}
            initialParams={{
              signIn: this._signIn.bind(this)
            }}
          />
        )}
      </AuthStack.Navigator>
    );
  }
}
