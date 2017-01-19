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
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';

import Content from './app/components/content.js'

export default class batagor extends Component {
  render() {
    return (
        <Content />
    );
  }
}


AppRegistry.registerComponent('batagor', () => batagor);
