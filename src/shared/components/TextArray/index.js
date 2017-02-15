/* @flow */

import React from 'react';
import { Text, View } from 'react-native';

const TextArray = (text, style) => {
  return text.map(function(obj, index) {
    return (
        <Text key={index} style={style}>{obj}</Text>
    );
  });
}

export default TextArray
