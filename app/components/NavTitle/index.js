import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NavBar extends Component {
  render() {
    return (
        <Text style={style}>Account</Text>
    );
  }
}

const style = {
    color:'#fff',
    textAlign:'center',
    fontWeight: '900',
    fontSize: 20,
}