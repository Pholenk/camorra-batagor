import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Main from './Main'
import Home from './home'

export default class Navigate extends Component {
  renderScene(route, navigator) {
    console.log('route', route.name)
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
