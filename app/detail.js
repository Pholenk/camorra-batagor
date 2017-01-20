import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity
} from 'react-native';

import BackButton from './detailComponents/BackButton.js'
import Header from './Header.js'
import styles from './detailComponents/detailStyles.js'
import Rating from './detailComponents/Rating.js'

export default class detail extends Component {

  submit(){
    alert(this.state.starCount)
  }

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <ScrollView>
          <View style={styles.parentContainer}>
              <View style={styles.forHeaderParentContainer}>
                  <BackButton />
                  <Header />
              </View>
              <View style={styles.imageContainer}>
                  <Image source={require('./detailComponents/index.png')}/>
              </View>
              <View style={styles.forBodyContainer}>
                  <View style = {styles.iconContainer}>
                      <Image source={require("./detailComponents/place.png")}/>
                  </View>
                  <View style={styles.textContainer}>
                      <Text style={styles.bodyText}>
                          jalan bandung no 99 askfasfa s fsafassa fasfas fasfasf saf
                      </Text>
                  </View>
              </View>
              <View style={styles.imageContainer}>
                  <Image source={require('./detailComponents/index.png')}/>
              </View>
              <View style={styles.forBodyContainer}>
                  <View style = {styles.iconContainer}>
                      <Image source={require("./detailComponents/menu.png")}/>
                      <Image source={require("./detailComponents/favorite.png")}/>
                  </View>
                  <View style={styles.textContainer}>
                      <Text style={styles.bodyText}>
                          kaos kaki bakar
                      </Text>
                  </View>
              </View>
              <View style={styles.forBodyContainer}>
                  <View style = {styles.iconContainer}>
                      <Image source={require("./detailComponents/price.png")}/>
                  </View>
                  <View style={styles.textContainer}>
                      <Text style={styles.bodyText}>
                          0-1000
                      </Text>
                  </View>
              </View>
          </View>
          <View style={styles.ratingContainer}>
              <Rating star={this.state.starCount} onStarRatingPress={(value)=>this.onStarRatingPress(value)}/>
              <View style={styles.submitButtonContainer}>
                  <TouchableOpacity onPress={()=>this.submit()}>
                      <Text style={styles.buttonText}>
                          OK
                      </Text>
                  </TouchableOpacity>
              </View>
          </View>
      </ScrollView>
    );
  }
}
