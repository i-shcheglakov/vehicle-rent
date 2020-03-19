import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Button,
  Icon
} from 'react-native-elements';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

export default class MapScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'flex-start'}}>
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
            onPress={() => this.props.navigation.toggleDrawer()}
          >
            <Icon
              name={'menu'}
              size={30}
              color='black'
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <Button
            onPress={() => this.props.navigation.navigate('QRCodeScanner')}
            containerStyle={{margin: 20, width: 250}}
            buttonStyle={{borderWidth: 0, borderRadius: 5}}
            title='Scan QR code'
            titleStyle={{paddingLeft: 20, color: 'black'}}
            type='outline'
            raised
            icon={
              <IconAwesome
                name='qrcode'
                size={30}
                color='black'
              />
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})