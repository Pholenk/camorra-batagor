import React from 'react';
import { View, Text } from 'react-native';
import { writeNewPlace, getPlaces } from './database/places';

getPlaces().then((response)=>{
  console.log(response.val());
});


const Sample = () => (
  <View>
    <Text>Hello World</Text>
  </View>
);
export default Sample;
