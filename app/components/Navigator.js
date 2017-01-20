import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import StarRating from 'react-native-star-rating';
import Main from './../../main'
import Home from './../../home'

export default class batagor extends Component {

  renderScene(route, navigator) {
     if(route.name == 'Main') {
       return <Main navigator={navigator} {...route.passProps} />
     }
     if(route.name == 'Home') {
       return <Home navigator={navigator} {...route.passProps} />
     }
   }
  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'Main' }}
        renderScene={ this.renderScene } />
    )
  }
}



AppRegistry.registerComponent('batagor', () => batagor);
