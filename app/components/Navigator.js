import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  BackAndroid
} from 'react-native';

import Main from './Main'
import Home from './home'

export default class Navigate extends Component {
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
  }

  onBackPress() {
    if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
        this.navigator.pop();
        return true;
    }
    return false;
  }

  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'Main' }}
        renderScene={RouteMapper}
        ref={(nav) => {this.navigator = nav}}/>
    )
  }
}

var RouteMapper = function(route, navigator) {
  switch (route.name) {
    case 'Main':
      return (
        <Main
          navigator={navigator} {...route.passProps} />
      );
      break;
      case 'Home':
        return (
          <Home
            navigator={navigator} {...route.passProps} />
        );
      break;
      default:
      break;

  }
}
