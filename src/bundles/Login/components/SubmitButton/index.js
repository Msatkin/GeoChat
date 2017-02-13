/* @flow */

import React from 'react';
import { Button, View } from 'react-native';
import styles from './styles';

const SubmitButton = (props: Props): React$Element<any> => {
  return (
    <View style={styles.button}>
      <Button
        onPress={() => console.log('pressed')}
        title="Login"
        color="#328FE6"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}

export default SubmitButton
