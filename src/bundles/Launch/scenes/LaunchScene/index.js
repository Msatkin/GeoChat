/* @flow */

import React from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'

const LaunchScene = () => {
  return (
    <View style={styles.container}>
      <Title>Error: Something went wrong!</Title>
      <Link onPress={Actions.counter}>
        Login
      </Link>
    </View>
  )
}

export default LaunchScene
