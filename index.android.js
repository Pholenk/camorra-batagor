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
  Image
} from 'react-native';

export default class batagor extends Component {
  render() {
    return (
      <View style = {styles.parentContainer}>
          <View style = {styles.headerContainer}>
              <Text style = {styles.headerText}>
                INI HEADER
              </Text>
          </View>
          <View style = {styles.imageContainer}>
              <Image source={require('./index.png')}/>
          </View>
          <View style = {styles.textContainer}>
              <Text style = {styles.bodyText}>
                  Alamat
              </Text>
              <Text style = {styles.bodyText}>
                  jalan bandung no 99
              </Text>
          </View>
          <View style = {styles.imageContainer}>
              <Image source={require('./index.png')}/>
          </View>
          <View style = {styles.textContainer}>
              <Text style = {styles.bodyText}>
                  Range Harga :
              </Text>
              <Text style = {styles.bodyText}>
                  0-100
              </Text>
          </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  headerContainer: {
    //flex: 1,
    flexDirection: 'row',

    backgroundColor: '#2196f3',
  },
  headerText: {
    padding : 10,
    fontSize: 20,

    alignItems: 'center',
    color: '#ffffff'
  },
  imageContainer: {
      flex: 1,
      width: 100
  },
  textContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      width: 100
  },
  bodyText: {
    fontSize: 40,
    margin: 10,
    color: '#ff9800'
  }
});

AppRegistry.registerComponent('batagor', () => batagor);
