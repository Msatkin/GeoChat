/* @flow */

import React from 'react'
import { View } from 'react-native'
import LoginContainer from '@Login/containers/LoginContainer'
import styles from './styles'

const LoginScene = () => {
  console.log('LoginScene')
  return (
    <View style={styles.container}>
      <LoginContainer />
    </View>
  )
}

export default LoginScene
