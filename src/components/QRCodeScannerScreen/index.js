import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button
} from 'react-native';
import { RNCamera } from'react-native-camera';

const { width, height } = Dimensions.get('window');

export default class QRCodeScannerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barcodeData: null,
      flashLight: false,
    }
  }

  renderFlashLightButton = () => {
    const { flashLight } = this.state;
    return (
      <Button
        title={flashLight ?
           'Light Off' :
           'Light On'}
        onPress={() =>
          this.setState({flashLight: !flashLight})
        }
      />
    );
  }

  renderOverlay = () => {
    const { barcodeData } = this.state;
    return (
      <View style={{flex: 1}}>
        <View
          style={[
            styles.overlay,
            styles.overlayTop
          ]}
        >
          <Text style={styles.text}>
            Find the code on top of the handle
          </Text>
        </View>
        <View style={styles.overlayRow}>
          <View style={styles.overlay}/>
          <View style={styles.overlayCenter}/>
          <View style={styles.overlay}/>
        </View>
        <View
          style={[
            styles.overlay,
            styles.overlayBottom
            ]}
        >
          <Text style={styles.text}>
            {barcodeData}
          </Text>
          {this.renderFlashLightButton()}
        </View>
      </View>
    );
  }

  render() {
    const { flashLight } = this.state;

    return(
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.cameraView}
          captureAudio={false}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            this.setState({barcodeData: barcodes[0].data})
          }}
          flashMode={flashLight ?
            RNCamera.Constants.FlashMode.torch :
            RNCamera.Constants.FlashMode.off
          }
        >
          {this.renderOverlay()}
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cameraView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 12,
    color: 'white'
  },
  overlayTop: {
    flex: 1
  },
  overlayRow: {
    flexDirection: 'row'
  },
  overlayBottom: {
    flex: 1
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  overlayCenter: {
    width: 240,
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0086b3',
  }
})
