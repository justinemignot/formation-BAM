// @flow

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Page } from 'firstAppReactNative/src/components';

import styles from './Dashboard.style';

export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  props: PropsType;

  render() {
    return (
      <Page>
        <View>
          <Text> This is the dashboard </Text>
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
