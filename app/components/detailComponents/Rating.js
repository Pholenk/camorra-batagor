import React, {Component, PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import StarRating from 'react-native-star-rating';

export default class Rating extends Component {


  render(props) {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column', //column for main
        justifyContent: 'space-between', //primary axis
        alignItems: 'center', //flex-end for main
      }}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.props.star}
          starColor={'gold'}
          starSize={40} //25 for main
          selectedStar={(value)=>this.props.onStarRatingPress(value)}
        />
      </View>
    );
  }
}
