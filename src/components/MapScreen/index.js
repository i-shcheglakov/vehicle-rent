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
import GoogleMapView from './GoogleMapView'

export default class MapScreen extends React.Component {
  render() {
    return (
      <View>
        <GoogleMapView/>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <View style={{alignItems: 'flex-start'}}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:'rgba(0,0,0,0)',
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
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}>
            <Button
              containerStyle={{
                margin: 20,
                width: 250
              }}
              buttonStyle={{
                borderWidth: 0,
                borderRadius: 5
              }}
              titleStyle={{
                paddingLeft: 20,
                color: 'black'
              }}
              title='Scan QR code'
              type='outline'
              raised
              icon={
                <IconAwesome
                  name='qrcode'
                  size={30}
                  color='black'
                />
              }
              onPress={() => this.props.navigation.navigate('QRCodeScanner')}
            />
          </View>
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