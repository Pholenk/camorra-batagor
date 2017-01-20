import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';

import Detail from './app/detail.js'

export default class batagor extends Component {
  render() {
    return (
        <Detail />
    );
  }
}

AppRegistry.registerComponent('batagor', () => batagor);
