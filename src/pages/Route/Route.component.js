// @flow

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Page } from 'firstAppReactNative/src/components';

import styles from './Route.style';

export default class Route extends Component {
  static navigationOptions = {
    title: 'Route',
  };
  props: PropsType;

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            This is the Route page
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
