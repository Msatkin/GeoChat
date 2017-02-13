/* @flow */

import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import styles from './styles'

type Props = {

}

const SubmitButton = (props: Props): React$Element<any> => {
  return (
    <TouchableHighlight
        style={styles.button}
        underlayColor={'#328FE6'}
        onPress={() => console.log('pressed')}>
        <Text style={styles.text}>Register</Text>
    </TouchableHighlight>
  )
}

export default SubmitButton
