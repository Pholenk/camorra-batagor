import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button
} from 'react-native';

import Header from './header.js'
import styles from './detailStyles.js'

export default class content extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.parentContainer}>
          <Header />
          <View style={styles.imageContainer}>
            <Image source={require('./index.png')}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.bodyText}>
            ALAMAT
            </Text>
            <Text style={styles.bodyText}>
              jalan bandung no 99
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('./index.png')}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.bodyText}>
              MENU UNGGULAN
            </Text>
            <Text style={styles.bodyText}>
              kaos kaki bakar
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.bodyText}>
              KISARAN HARGA
            </Text>
            <Text style={styles.bodyText}>
              0-100
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
