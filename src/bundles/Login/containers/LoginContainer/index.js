/* @flow */

import React, { Component } from 'react';
import { View } from 'react-native';
import UsernameInput from '@Login/components/UsernameInput';
import PasswordInput from '@Login/components/PasswordInput';
import SubmitButton from '@Login/components/SubmitButton';
import RegisterButton from '@Login/components/RegisterButton';
import ForgotPasswordButton from '@Login/components/ForgotPasswordButton';
import connect from './connect';
import styles from './styles';
import Title from '@components/Title'

type Props = {
  login: {
    username: string,
    password: string,
  },
  changeUsername: Function,
  changePassword: Function,
}

class LoginContainer extends Component {

  props: Props;

  render() {
    console.log(this.props);
    return (
      <View style={styles.main}>

        <View style={styles.top}>

        </View>

        <View style={styles.center}>
          <Title>GeoChat</Title>
          <UsernameInput
            changeUsername={this.props.changeUsername}
            value={this.props.login.username}
          />
          <PasswordInput
            changePassword={this.props.changePassword}
            value={this.props.login.password}
          />
          <SubmitButton/>
        </View>

        <View style={styles.bottom}>
          <RegisterButton/>
          <ForgotPasswordButton/>
        </View>
        
      </View>
    );
  }
}

export default connect(LoginContainer)
