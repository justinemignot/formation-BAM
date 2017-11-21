// @flow

import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight, ActivityIndicator } from 'react-native';

import { Page } from 'firstAppReactNative/src/components';
import { Dashboard } from '../Dashboard';

import styles from './HomePage.style';

import api from '../../utils/api';

export default class HomePage extends Component {
  static navigationOptions = {
    title: 'Home',
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

  handleChange = (event) => {
    this.setState({
      username: event.nativeEvent.text
    })
  }

  handleSubmit = (event) => {
    //update our indicatorIOS spinner
    this.setState({
      isLoading: true
    })

    const { navigate } = this.props.navigation;

    api.getBio(this.state.username)
      .then((res) => {
        if(res.message === 'Not Found') {
          console.log("user not found")
          this.setState({
            error: 'User not found',
            isLoading: false
          })
        } else {
          navigate('dashboard',  { userInfo: res});
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          })
        }
      })
    //fetch data from github
    //reroute to the next passing that github information
  }

  render() {
    var showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    );
    return (
      <Page>
        <View style={styles.container}>
          <Text style={styles.title}>
            Search for a GitHub User
          </Text>
          <TextInput
            style={styles.searchInput}
            value={this.state.username}
            onChange={this.handleChange} />
          <TouchableHighlight
              style={styles.button}
              onPress={this.handleSubmit}
              underlayColor= "white">
              <Text>SEARCH</Text>
          </TouchableHighlight>
          <ActivityIndicator
            animating={this.state.isLoading}
            color="#111"
            size="large">
          </ActivityIndicator>
          {showErr}
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
