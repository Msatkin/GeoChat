/* @flow */

import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

type Props = {
  update: Function,
  value: string
}

const ConfirmPasswordInput = (props: Props): React$Element<any> => {
  const value = props.value;
  const update = props.update;
  return (
    <TextInput
        style={styles.input}
        value={value}
        secureTextEntry={true}
        onChangeText={(text) => update(text)}
        placeholder={'Confirm Password'}
        maxLength={24}
        multiline={false}
    />
  )
}

export default ConfirmPasswordInput
