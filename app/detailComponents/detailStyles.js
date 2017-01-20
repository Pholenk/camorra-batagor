import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  forHeaderParentContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#616161'
  },
  headerContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonContainer: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      flex: 0.5
  },
  submitButtonContainer: {
      backgroundColor: '#ff5252',
      width: 100,
      height: 50,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e0e0e0'
  },
  forBodyContainer: {
    paddingRight: 2,
    flex: 1,
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#ff5252'
  },
  iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#ff5252',
  },
  headerText: {
    fontSize: 20,
    color: '#ffffff'
  },
  imageContainer: {
      flex: 1,
      alignSelf: 'center',
      marginTop : 10,
      marginBottom : 10
  },
  textContainer: {
      paddingRight: 2,
      flex: 3,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
      marginBottom: 5,
      backgroundColor: '#ff5252'
  },
  bodyText: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
    color: '#e0e0e0',
  },
  ratingContainer: {
    flex:1,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles
