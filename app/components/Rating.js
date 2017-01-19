import React, {Component, PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import StarRating from 'react-native-star-rating';

export default class Rating extends Component {

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
      <View style={{
        flex: 1,
        flexDirection: 'column', //column for main
        justifyContent: 'space-between', //primary axis
        alignItems: 'center', //flex-end for main
      }}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          starColor={'gold'}
          starSize={40} //25 for main
          selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
      </View>
    );
  }
}
