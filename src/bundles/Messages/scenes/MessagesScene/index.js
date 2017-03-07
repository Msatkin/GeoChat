/* @flow */

import React from 'react'
import { View } from 'react-native'
import MessagesContainer from '@Messages/containers/MessagesContainer'
import styles from './styles'

const MessagesScene = () => {
  console.log('MessagesScene')
  return (
    <View style={styles.container}>
      <MessagesContainer />
    </View>
  )
}

export default MessagesScene
