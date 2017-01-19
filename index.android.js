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

import Main from './app/components/Main.js'

export default class batagor extends Component {
  render() {
    return (
      <View style={{flex: 1, flexGrow: 1}}>
        <Main />
      </View>

    );
  }
}

AppRegistry.registerComponent('batagor', () => batagor);
