/* @flow */

import React, {Component} from 'react';
import {View} from 'react-native';
import connect from './connect';
import styles from './styles';
import Title from '@components/Title';
import EmailInput from '@Register/components/EmailInput';
import UsernameInput from '@Register/components/UsernameInput';
import PasswordInput from '@Register/components/PasswordInput';
import ConfirmPasswordInput from '@Register/components/ConfirmPasswordInput';
import SubmitButton from '@Register/components/SubmitButton';
import TextArray from '@components/TextArray';

type Props = {
  register: {
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
    errors: object,
    apiCall: object
  },
  changeEmail: Function,
  changeUsername: Function,
  changePassword: Function,
  changeConfirmPassword: Function,
  setErrors: Function,
  setApiResponse: Function
}

class RegisterContainer extends Component {

  props : Props;

  render() {
    const errorList = TextArray(this.props.register.errors, styles.error);
    return (
      <View style={styles.main}>
        <View style={styles.left}></View>
        <View style={styles.center}>
          <View style={styles.main_center}>
            <View style={styles.top}></View>
            <View style={styles.center}>
              <View style={styles.error_view}>
                {errorList}
              </View>
              <EmailInput update={this.props.changeEmail} value={this.props.register.email}/>
              <UsernameInput
                update={this.props.changeUsername}
                value={this.props.register.username}/>
              <PasswordInput
                update={this.props.changePassword}
                value={this.props.register.password}/>
              <ConfirmPasswordInput
                update={this.props.changeConfirmPassword}
                value={this.props.register.confirmPassword}/>
              <SubmitButton
                values={this.props}/>
            </View>
            <View style={styles.bottom}></View>
          </View>
        </View>
        <View style={styles.right}></View>
      </View>
    );
  }
}

export default connect(RegisterContainer)
