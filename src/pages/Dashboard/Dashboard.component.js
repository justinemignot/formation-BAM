// @flow

import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import { Page } from 'firstAppReactNative/src/components';

import styles from './Dashboard.style';

export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  props: PropsType;

  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    if(btn === 0) {
      obj.backgroundColor = "#48BBEC";
    } else if (btn === 1){
      obj.backgroundColor = "#E77AAE";
    } else {
      obj.backgroundColor = "#758BF4";
    }

    return obj;
  }

  goToProfile = (event) => {
    const { navigate } = this.props.navigation;
    navigate('dashboard',  { userInfo: res});
  }

  goToRepos = (event) => {
    console.log("going to Repos")
  }

  goToNotes = (event) => {
    console.log("going to Notes")
  }

  render() {
    const { params } = this.props.navigation.state;
    console.log(params.userInfo.avatar_url)
    return (
      <Page>
        <View style={styles.container}>
          <Image source={{uri: params.userInfo.avatar_url}} style={styles.image}/>
          <TouchableHighlight
            style={this.makeBackground(0)}
            onPress={this.goToProfile}
            underlayColor='#88D4F5'>
              <Text style={styles.buttonText}>View Profile</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={this.makeBackground(1)}
            onPress={this.goToRepos}
            underlayColor='#88D4F5'>
              <Text style={styles.buttonText}>View Repos</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={this.makeBackground(2)}
            onPress={this.goToNotes}
            underlayColor='#88D4F5'>
              <Text style={styles.buttonText}>View Notes</Text>
          </TouchableHighlight>
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
