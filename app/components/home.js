import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'


export default class Home extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          marginTop: 20,
      }}>
        <TouchableHighlight onPress={() => this.props.navigator.pop()}>
          <Text>Halaman Detail</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
