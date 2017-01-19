import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#2196f3',
    padding : 10,
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20,
    color: '#ffffff'
  },
  parentContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  imageContainer: {
      flex: 1,
      alignSelf: 'center',
      marginTop : 10,
      marginBottom : 10
  },
  textContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#ff9800',
      margin : 10,
      justifyContent: 'center'
  },
  bodyText: {
    fontSize: 20,
    margin: 10,
    color: '#000000',
    justifyContent: 'center'
  },
  buttonBack: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ff9800',
    padding : 10,
    justifyContent: 'center',
    width: 10
  }
});

export default styles
