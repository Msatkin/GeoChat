/* @flow */

import React, { Component } from 'react';
import { View } from 'react-native';
import connect from './connect';
import styles from './styles';
import Title from '@components/Title';
import EmailInput from '@Register/components/EmailInput';
import UsernameInput from '@Register/components/UsernameInput';
import PasswordInput from '@Register/components/PasswordInput';
import ConfirmPasswordInput from '@Register/components/ConfirmPasswordInput';
import SubmitButton from '@Register/components/SubmitButton';

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
          <EmailInput
            update={this.props.changeEmail}
            value={this.props.register.email}
          />
          <UsernameInput
            update={this.props.changeUsername}
            value={this.props.register.username}
          />
          <PasswordInput
            update={this.props.changePassword}
            value={this.props.register.password}
          />
          <ConfirmPasswordInput
            update={this.props.changeConfirmPassword}
            value={this.props.register.confirmPassword}
          />
          <SubmitButton/>
        </View>

        <View style={styles.bottom}>

        </View>
        
      </View>
    );
  }
}

export default connect(RegisterContainer)
