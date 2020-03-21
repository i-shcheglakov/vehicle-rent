import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Polygon } from 'react-native-maps'

export default class GoogleMapView extends React.Component {
  state = {
    coordinates: [
      { name: '1', latitude: 50.442056, longitude: 30.501415 },
      { name: '2', latitude: 50.444491, longitude: 30.498869 },
      { name: '3', latitude: 50.445336, longitude: 30.500797 },
      { name: '4', latitude: 50.443990, longitude: 30.508946 },
      { name: '5', latitude: 50.440936, longitude: 30.508253 },
    ]
  }
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 50.443660,
          longitude: 30.504575,
          latitudeDelta: 0.01,
          longitudeDelta: 0.0215
        }}
      >
        <Marker
          coordinate={{
            latitude: 50.439543,
            longitude: 30.496425
          }}
          title={'Kick scooter info'}>
        </Marker>
        <Polygon
          coordinates={this.state.coordinates}
          fillColor={'rgba(255,100,200,0.5)'}>
        </Polygon>
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%'
  }
});
