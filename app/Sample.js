import React from 'react';
import { View, Text } from 'react-native';
import { addNewPlace, getPlaces } from './database/places';

addNewPlace('Rumah Sosis Bandung', {
  address: 'Hello world', latitude: -6.8167892, longitude: 107.6128168
}).then((response)=>{
  console.log(response);
});


const Sample = () => (
  <View>
    <Text>Hello World</Text>
  </View>
);
export default Sample;
