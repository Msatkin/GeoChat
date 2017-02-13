/* @flow */

import React from 'react'
import { View } from 'react-native'
import RegisterContainer from '@Register/containers/RegisterContainer'
import styles from './styles'

const RegisterScene = () => {
  console.log('LoginScene')
  return (
    <View style={styles.container}>
      <RegisterContainer />
    </View>
  )
}

export default RegisterScene
