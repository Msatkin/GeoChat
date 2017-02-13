/* @flow */

import React, { Component } from 'react';
import { View } from 'react-native';
import connect from './connect';
import styles from './styles';
import Title from '@components/Title';
//import UsernameInput from '@Register/components/UsernameInput';
//import PasswordInput from '@Register/components/PasswordInput';
//import SubmitButton from '@Register/components/SubmitButton';

type Props = {
  register: {
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
  },
  changeEmail: Function,
  changeUsername: Function,
  changePassword: Function,
  changeConfirmPassword: Function,
}

class RegisterContainer extends Component {

  props: Props;

  render() {
    console.log(this.props);
    return (
      <View style={styles.main}>

        <View style={styles.top}>

        </View>

        <View style={styles.center}>

        </View>

        <View style={styles.bottom}>

        </View>
        
      </View>
    );
  }
}

export default connect(RegisterContainer)
