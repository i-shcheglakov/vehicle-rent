import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Button,
  Alert 
} from 'react-native';
import { 
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      error: null
    }
  }

  renderIsSignedIn() {
    return (
      <Button
        onPress={async () => {
          const isSignedIn = await GoogleSignin.isSignedIn();
          Alert.alert(String(isSignedIn));
        }}
        title="is user signed in?"
      />
    );
  }

  renderGetCurrentUser() {
    return (
      <Button
        onPress={async () => {
          const userInfo = await GoogleSignin.getCurrentUser();
          Alert.alert('current user', userInfo ? JSON.stringify(userInfo.user): 'null');
        }}
        title='get current user'
      />
    );
  }

  renderGetTokens() {
    return (
      <Button
        onPress={async () => {
          const tokens = await GoogleSignin.getTokens();
          Alert.alert('tokens', JSON.stringify(tokens))
        }}
        title="get tokens"
      />
    );
  }

  renderUserInfo(userInfo) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF'
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 20
          }}
        >
          Welcome {userInfo.user.name}
        </Text>
        <Text>Your user info: {JSON.stringify(userInfo.user)}</Text>
        <Button onPress={this._signOut} title='Logout'/>
        {this.renderError()}
      </View>
    );
  }

  renderSignInButton() {
    console.log(this.props.route);
    return (
      <View 
        style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <GoogleSigninButton
          style={{ width: 312, height: 48, margin: 20}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this.props.route.params.signIn}
        />
        {this.renderError()}
      </View>
    );
  }

  renderError() {
    const { error } = this.state;
    if (!error) {
      return null;
    }

    const text = `${error.toString()} ${error.code ? error.code : ''}`;
    return <Text>{text}</Text>;
  }

  render() {
    const { userInfo } = this.state;

    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        } }
      >
        {this.renderIsSignedIn()}
        {this.renderGetCurrentUser()}
        {this.renderGetTokens()}
        {this.renderSignInButton()}
      </View>
    );
  }
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <TextInput
  //         placeholder='Enter Email'
  //         placeholderTextColor='rgba(255,255,255,0.7)'
  //         returnKeyType='next'
  //         onSubmitEditing={() => this.passwordInput.focus()}
  //         style={styles.input}
  //         keyboardType='email-address'
  //         autoCapitalize='none'
  //         autoCorrect={false}
  //         />
  //       <TextInput
  //         placeholder='Enter Password'
  //         placeholderTextColor='rgba(255,255,255,0.7)'
  //         returnKeyType='go'
  //         secureTextEntry
  //         style={styles.input}
  //         ref={(input) => this.passwordInput = input}
  //         />
  //       <TouchableOpacity style={styles.buttonContainer}>
  //         <Text style={styles.buttonText}>LOGIN</Text>
  //       </TouchableOpacity>
  //       <GoogleSigninButton
  //         style={{ width: 312, height: 48 }}
  //         size={GoogleSigninButton.Size.Wide}
  //         color={GoogleSigninButton.Color.Light}
  //         onPress={()=> {}}/>
  //     </View>
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40, 
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#fff'
  },
  buttonContainer: {
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'

  }
});