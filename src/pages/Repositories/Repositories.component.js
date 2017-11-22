// @flow

import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableHighlight } from 'react-native';

import styles from './Repositories.style';

import {Page, Badge, Separator} from '../../components/';

export default class Repositories extends Component {

  openPage = (url) => {
    console.log("this is the url : ", url);
  }

  render(){
    const { params } = this.props.navigation.state;
    var repos = params.repos;
    var userInfo = params.userInfo;
    var list = repos.map((item, index) => {
      var descr = repos[index].description ? <Text style={styles.descr}> {repos[index].description} </Text> : <View/>
      return (
          <View key={index}>
            <TouchableHighlight
              onPress={this.openPage(repos[index].html_url)}
              underlayColor='black'>
              <Text>{repos[index].name}</Text>
            </TouchableHighlight>
            <Text>Stars : {repos[index].stargazers_count}</Text>
            {descr}
            <Separator/>
          </View>
      )
    });
    console.log("list : ", list)
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={params.userInfo}/>
        {list}
      </ScrollView>
    )
    
  }
}

