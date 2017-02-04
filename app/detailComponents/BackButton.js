import React, {Component} from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native'

import styles from "./detailStyles.js"

export default class BackButton extends Component{
    toMain(){
        alert('hi!')
    }

    render(){
      return(
          <View style = {styles.backButtonContainer}>
            <TouchableOpacity onPress={this.toMain}>
              <Image source={require("./back.png")}/>
            </TouchableOpacity>
          </View>
      )
    }
}
