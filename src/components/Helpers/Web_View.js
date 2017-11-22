import React, { Component } from 'react';
import { Text, WebView, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6EF",
    flex: 1,
    flexDirection: 'column'
  }
});

export default class Web extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <WebView source={{uri: params.url}}></WebView>
      </View>
    )
  }
}
