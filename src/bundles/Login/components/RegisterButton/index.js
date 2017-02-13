/* @flow */

import React from 'react';
import { View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

type Props = {

}

const RegisterButton = (props: Props): React$Element<any> => {
  return (
    <View style={styles.button}>
      <Button
        onPress={Actions.register}
        title="Register"
        color="#328FE6"
        accessibilityLabel="Click to register"
      />
    </View>
  )
}

export default RegisterButton
