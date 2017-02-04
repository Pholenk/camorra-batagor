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


import Main from './app/components/Main'
import Navigate from './app/components/Navigator'


export default class batagor extends Component {
  render() {
    return (
      <View style={{flex: 1, flexGrow: 1}}>
        <Navigate />
      </View>
    );
  }
}

AppRegistry.registerComponent('batagor', () => batagor);
