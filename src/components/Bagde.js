import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
  },
  image: {
    height:125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  }
});
export default class Badge extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri : this.props.userInfo}}/>
        <Text>{this.props.userInfo.name}</Text>
      </View>
    )
  }
}


Badge.propTypes = {
  userInfo: PropTypes.object.isRequired
};
