/* @flow */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import UsernameInput from '@Login/components/UsernameInput';
import PasswordInput from '@Login/components/PasswordInput';
import SubmitButton from '@Login/components/SubmitButton';
import RegisterButton from '@Login/components/RegisterButton';
import ForgotPasswordButton from '@Login/components/ForgotPasswordButton';
import connect from './connect';
import styles from './styles';
import Title from '@components/Title';
import TextArray from '@components/TextArray';
import ForwardButton from '@SceneComponents/ForwardButton';
import { Actions } from 'react-native-router-flux';

type Props = {
  login: {
    username: string,
    password: string,
    errors: object,
    apiCall: object
  },
  changeUsername: Function,
  changePassword: Function,
  setLoginErrors: Function,
  setLoginApiResponse: Function
}

class LoginContainer extends Component {

  props : Props;

  render() {
    const errorList = TextArray(this.props.login.errors, styles.error);
    return (
      <View style={styles.main}>
        <View style={styles.left}></View>

        <View style={styles.center}>
          <View style={styles.main_center}>
            <View style={styles.top}></View>

            <View style={styles.center}>
              <TouchableOpacity onPress={Actions.MessagesContainer}>
                <Title>GeoChat</Title>
              </TouchableOpacity>
              <View style={styles.error_view}>
                {errorList}
              </View>
              <UsernameInput
                update={this.props.changeUsername}
                value={this.props.login.username}/>
              <PasswordInput
                update={this.props.changePassword}
                value={this.props.login.password}/>
              <SubmitButton
                values={this.props}/>
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
