// @flow

import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';

import { Page } from 'firstAppReactNative/src/components';

import styles from './Route.style';

export default class Route extends Component {
  static navigationOptions = {
    title: 'Route',
  };
  props: PropsType;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event){
    this.setState({
      username: event.nativeEvent.text
    })
  }

  handleSubmit(event) {
    //update our indicatorIOS spinner
    this.setState({
      isLoading: true
    })
    console.log('submit', this.state.username);

    //fetch data from github
    //reroute to the next passing that github information
  }

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Text style={styles.title}>
            Search for a GitHub User
          </Text>
          <TextInput
            style={styles.searchInput}
            value={this.state.username}
            onChange={this.handleChange.bind(this)} />
          <TouchableHighlight
              style={styles.button}
              onPress={this.handleSubmit.bind(this)}
              underlayColor= "white">
              <Text>SEARCH</Text>
          </TouchableHighlight>
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
