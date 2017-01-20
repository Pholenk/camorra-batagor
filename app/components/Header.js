import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import styles from './detailComponents/detailStyles.js'

export default class Header extends Component {

  render() {
    return (
      <View style = {styles.headerContainer}>
            <Text style = {styles.headerText}>
                INI HEADER
            </Text>
      </View>
)
    }
};
