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
  
  componentWillReceiveProps(nextProps) {
    console.log('changed')
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.left}></View>

        <View style={styles.center}>
          <View style={styles.main_center}>
            <View style={styles.top}></View>


            <View style={styles.center}>
              <Title>GeoChat</Title>
              <UsernameInput
                update={this.props.changeUsername}
                value={this.props.login.username}
              />
              <PasswordInput
                update={this.props.changePassword}
                value={this.props.login.password}
              />
              <SubmitButton/>
            </View>


            <View style={styles.bottom}>
              <RegisterButton/>
              <ForgotPasswordButton/>
            </View>
          </View>
        </View>
        
        <View style={styles.right}></View>
      </View>
    );
  }
}

export default connect(LoginContainer)
