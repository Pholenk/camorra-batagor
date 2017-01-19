import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import styles from './detailStyles.js'

export default class content extends Component {
  //const onPressButton

  render() {
    return (
      //<TouchableOpacity
      //  onPress={this.onPressButton}>

      //</TouchableOpacity>
      <View style = {styles.headerContainer}>
            <Text style = {styles.headerText}>
                INI HEADER
            </Text>
      </View>
)
    }
};
