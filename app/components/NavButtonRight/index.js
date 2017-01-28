import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';

export default class NavButtonRight extends Component {
  render() {
    return (
        <TouchableHighlight
        style={styleButton}
        underlayColor={'#4d3f76'}
        onPress={() => console.log('pressed')}
        >
          <Text style={styleText}>Post</Text>
        </TouchableHighlight>
    );
  }
}

const styleButton = {
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'flex-end',
    padding: 10,
    flex: 1,
    flexDirection:'row',
};

const styleText = {
    color:'#fff',
    textAlign:'center',
    alignItems: 'stretch'
}