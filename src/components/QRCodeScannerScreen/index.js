import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { RNCamera } from'react-native-camera';
import { color } from 'react-native-reanimated';

export default class QRCodeScannerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barcodeData: null
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          anroidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel'
          }}
          captureAudio={false}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            this.setState({barcodeData: barcodes[0].data})
          }}
        >
          <Text style={styles.text}>{this.state.barcodeData}</Text>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})
