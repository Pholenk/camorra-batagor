import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';

export default class MapLocation extends Component {

    state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      // <Navigator/>
      // <Rating/>
      <MapView
        style={ styles.map }
        // annotations={markers}

        region={this.state.region}
        onRegionChange={this.onRegionChange.bind(this)}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
});
