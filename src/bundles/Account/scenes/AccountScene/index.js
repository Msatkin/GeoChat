/* @flow */

import React from 'react'
import { View } from 'react-native'
import AccountContainer from '@Account/containers/AccountContainer'
import styles from './styles'

const AccountScene = () => {
  console.log('AccountScene')
  return (
    <View style={styles.container}>
      <AccountContainer />
    </View>
  )
}

export default AccountScene
