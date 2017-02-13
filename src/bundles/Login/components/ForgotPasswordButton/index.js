/* @flow */

import React from 'react'
import { View, Button } from 'react-native'
import styles from './styles'

type Props = {

}

const ForgotPasswordButton = (props: Props): React$Element<any> => {
  return (
    <View style={styles.button}>
      <Button
        onPress={() => console.log('pressed')}
        title="Forgot Password"
        color="#328FE6"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}

export default ForgotPasswordButton
