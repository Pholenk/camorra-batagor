/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Rating from './app/components/Rating'
import Navigator from './app/components/Navigator'
import MapLocation from './app/components/MapLocation'
// import MapView from 'react-native-maps';

export default class batagor extends Component {

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      // <Navigator/>
      // <Rating/>
      <MapLocation />

    );
  }
}

AppRegistry.registerComponent('batagor', () => batagor);
