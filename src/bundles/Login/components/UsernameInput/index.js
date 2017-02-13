/* @flow */

import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

type Props = {
  changeUsername: Function,
  value: string
}

const UsernameInput = (props: Props): React$Element<any> => {
  const value = props.value;
  const changeUsername = props.changeUsername;
  return (
    <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => changeUsername(text)}
        placeholder={'Enter Username'}
        maxLength={18}
        multiline={false}
    />
  )
}

export default UsernameInput
