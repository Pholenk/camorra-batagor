'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, Image, Text } from 'react-native';

/**
 * Optional Flowtype state and timer types definition
 */
type State = { animating: boolean; };
type Timer = number;


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 300,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
});

export default class Splash extends Component {
  /**
   * Optional Flowtype state and timer types
   */
  state: State;
  _timer: Timer;

  constructor(props) {
    super(props);
    this.state = {
      animating: true,
    };
  }

  componentDidMount() {
    this.setToggleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  setToggleTimeout() {
    this._timer = setTimeout(() => {
      this.setState({animating: !this.state.animating});
      this.setToggleTimeout();
    }, 1000000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./icon.png')}
          style={{width: 200, height: 50, marginLeft: 20}} />
        <ActivityIndicator
          animating={this.state.animating}
          style={[styles.centering, {height: 100}]}
          size={50}
        />
      </View>
    );
  }
}
