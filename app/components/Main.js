import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native'

import Row from './Row.js'
// FIXME
import places from './Places.js'

export default class Main extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(places),
    }
  }
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(places) => <Row {...places} /> }
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8e8e8e',
  },
});
