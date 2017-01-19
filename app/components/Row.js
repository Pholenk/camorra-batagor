import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  name: {
    textAlign: 'center',
    padding: 3,
    fontSize: 20,
    color: '#08bc43'
  },
  address: {
    textAlign: 'center',
    fontSize: 15,
  },
  operation: {
    padding: 3,
    textAlign: 'center',
    fontSize: 12
  },
  photo: {
    height: 80,
    width: 80,
    borderRadius: 3,
  },
})

const Row = (props) => (
  <View style={styles.container}>
    <Image source={{uri: props.image_url}} style={styles.photo} />
    <View style={styles.wrapper}>
      <Text style={styles.name}>
        {`${props.name}`}
      </Text>
      <Text style={styles.address}>
        {`${props.location.address}`}
      </Text>
      <Text style={styles.operation}>
        {`${props.operation.start} - ${props.operation.end} ${props.rating[0]["rating_value"]}`}
      </Text>
    </View>
  </View>
)

export default Row
