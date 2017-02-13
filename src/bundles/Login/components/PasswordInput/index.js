/* @flow */

import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

type Props = {
  changePassword: Function,
  value: string
}

const PasswordInput = (props: Props): React$Element<any> => {
  const value = props.value;
  const changePassword = props.changePassword;
  return (
    <TextInput
        style={styles.input}
        value={value}
        secureTextEntry={true}
        onChangeText={(text) => changePassword(text)}
        placeholder={'Enter Password'}
        maxLength={24}
        multiline={false}
    />
  )
}

export default PasswordInput
