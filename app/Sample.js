import React from 'react';
import { View, Text } from 'react-native';
import { writeNewPlace, readPlaces } from './database/places';

readPlaces().then((response)=>{
  console.log(response.val());
});


const Sample = () => (
  <View>
    <Text>Hello World</Text>
  </View>
);
export default Sample;
