import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { RNCamera } from'react-native-camera';

export default class QRCodeScannerScreen extends React.Component {
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
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})
