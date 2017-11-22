import React, { Component } from 'react';
import { Text, View, ListView, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import { Badge, Separator } from '.'

import api from './../utils/api';

const styles = StyleSheet.create({
  searchInput: {
    height: 50,
    borderColor: 'green',
    borderWidth: 1,
    width: 100,
    alignSelf: 'center'
  }
});

export default class Note extends Component {

  constructor(props){
    super(props);
    const { params } = this.props.navigation.state;
    this.ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});
    this.state = {
      dataSource: this.ds.cloneWithRows(params.notes),
      note: '',
      error: ''
    }
  }

  footer() {
    return (
      <View>
        <TextInput
          style={styles.searchInput}
          value={this.state.note}
          onChange={this.handleChange}
          placeholder="New Note"/>
          <TouchableHighlight
            underlayColor="#88D"
            onPress={this.handleSubmit}>
            <Text>Submit</Text>
          </TouchableHighlight>
      </View>
    )
  }

  handleChange = (event) => {
    this.setState({
      note: event.nativeEvent.text
    });
  }

  handleSubmit = (event) => {
    var note = this.state.note;
    this.setState({
      note: ''
    });

    const { params } = this.props.navigation.state;

    api.addNote(params.userInfo.login, note)
    .then((data) => {
      api.getNotes(params.userInfo.login)
      .then((data) => {
        this.setState({
          dataSource: this.ds.cloneWithRows(data)
        })
      })
      .catch((err) => {
        console.log('Request failed', err);
        this.setState({error})
      })
    })
  }

  renderRow = (rowData) => {
    return(
      <View>
        <Text>{rowData}</Text>
        <Separator/>
      </View>
    )
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderHeader={() => <Badge userInfo={params.userInfo}/> }/>
        {this.footer()}
      </View>
    )
  }
}
