import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Enter Email'
          placeholderTextColor='rgba(255,255,255,0.7)'
          returnKeyType='next'
          onSubmitEditing={() => this.passwordInput.focus()}
          style={styles.input}
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          />
        <TextInput
          placeholder='Enter Password'
          placeholderTextColor='rgba(255,255,255,0.7)'
          returnKeyType='go'
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
    backgroundColor: '#2980b9',
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'

  }
});