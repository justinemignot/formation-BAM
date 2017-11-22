import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height:1,
    backgroundColor: 'black',
    flex: 1
  }
});

export default class Separator extends Component {
  render() {
    return (
      <View style={styles.separator}></View>
    )
  }
}
