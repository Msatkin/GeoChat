/* @flow */

import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

type Props = {
  update: Function,
  value: string
}

const EmailInput = (props: Props): React$Element<any> => {
  const update = props.update;
  const value = props.value;
  return (
    <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => update(text)}
        placeholder={'Enter Email'}
        maxLength={18}
        multiline={false}
    />
  )
}
export default EmailInput