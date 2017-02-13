/* @flow */

import React from 'react'
import { View } from 'react-native'
import Title from '@components/Title'
import LoginContainer from '@Login/containers/LoginContainer'
import styles from './styles'

const LoginScene = () => {
  console.log('LoginScene')
  return (
    <View style={styles.container}>
      <Title>GeoChat</Title>
      <LoginContainer/>
    </View>
  )
}

export default LoginScene
