import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';

export default class NavButtonLeft extends Component {
  render() {
    return (
        <TouchableHighlight
        style={styleButton}
        underlayColor={'#4d3f76'}
        onPress={() => console.log('pressed')}
        >
        <Text style={styleText}>View</Text>
        </TouchableHighlight>
    );
  }
}

const styleButton = {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    flex: 1
};

const styleText = {
    color:'#fff',
    textAlign:'center',
};