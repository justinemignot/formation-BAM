// @flow

import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import { Page } from 'firstAppReactNative/src/components';

import styles from './Profile.style';

import {Badge} from '../../components/';

export default class Profile extends Component {

  getRowTitle(user, item) {
    item= (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }

  render(){
    const { params } = this.props.navigation.state;
    var userInfo = params.userInfo;
    var topicArr = [ 'company', 'location', 'followers', 'following']
    var list = topicArr.map((item, index) => {
      if (!userInfo[item]) {
        return <View key={index} />
      } else {
        return (
          <View key={index}>
            <Text>{this.getRowTitle(userInfo, item)}</Text>
            <Text>{userInfo[item]}</Text>
          </View>
        )
      }
    })
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={params.userInfo}/>
        {list}
      </ScrollView>
    )
    
  }
}
