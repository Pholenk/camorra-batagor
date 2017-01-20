import React, {Component} from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native'

import styles from "./detailStyles.js"

export default class BackButton extends Component{

    render(){
      return(
          <View style={styles.backButtonContainer}>
            <TouchableOpacity onPress={() => this.props.navigator.pop()}>
              <Image source={require("./back.png")}/>
            </TouchableOpacity>
          </View>
      )
    }
}
