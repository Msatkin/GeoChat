import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import NavButtonRight from './../NavButtonRight/index';
import NavButtonLeft from './../NavButtonLeft';
import NavTitle from './../NavTitle';

export default class NavBar extends Component {
  render() {
    return (
        <View style={style}>
            <NavButtonLeft/>
            <NavTitle/>
            <NavButtonRight style={rightStyle}/>
        </View>
    );
  }
}

const style = {
    backgroundColor:'#6E5BAA',
    paddingTop:15,
    paddingBottom:15,
    flexDirection:'row',
    alignItems: 'center',
    elevation: 10,
};

const rightStyle = {
    alignItems: 'flex-start',
    flex: 1
}