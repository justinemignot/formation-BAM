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
    const { params } = this.props.navigation.state;
    return (
      <Page>
        <View>
          <Text> This is the dashboard </Text>
          <Text>{params.userInfo.login}</Text>
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
