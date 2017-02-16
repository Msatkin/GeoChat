/* @flow */

import React from 'react';
import { Button, View } from 'react-native';
import styles from './styles';
import { register } from '@components/ApiCaller';
import { Actions } from 'react-native-router-flux';
import getHash from '@components/Hash';

const SubmitButton = (props: Props): React$Element<any> => {
  const email = props.values.register.email;
  const username = props.values.register.username;
  const password = props.values.register.password;
  const confirmPassword = props.values.register.confirmPassword;
  const setErrors = props.values.setErrors;
  const changePassword = props.values.changePassword;
  const changeConfirmPassword = props.values.changeConfirmPassword;

  const validate = () => {
    const errors = [];
    let isValid = true;
    if(email === ''|| username === '' || password === '' || confirmPassword === '') {
      isValid = false;
      if (email === '') {
        errors.push("Email must be entered");
      }
      if (username === '') {
        errors.push("Username must be entered");
      }
      if (password === '') {
        errors.push("Password must be entered");
      }
      else {
        if (confirmPassword === '') {
          errors.push("Please confirm your password");
        }
      }
    }
    if (password !== '' && confirmPassword !== '' && password !== confirmPassword) {
      isValid = false;
      errors.push("Passwords must match");
      props.values.changePassword('');
      props.values.changeConfirmPassword('');
    }
    if (isValid) {
      register(email, username, getHash(username, password), handleResponse);
      console.log('passed');
    }
    else {
      setErrors(errors);
    }
  }

  const handleResponse = (response) => {
    if (response.Success) {
      console.log('Registration was successful')
      props.values.setToken(response.Token);
      props.values.setUser(username);
      props.values.changeEmail('');
      props.values.changeUsername('');
      props.values.changePassword('');
      props.values.changeConfirmPassword('');
      props.values.setErrors([]);
      Actions.MainContainer();
    }
    else {
      console.log('Registration failed')
      if (response.Errors !== null) {
        console.log('Errors', response.Errors);
        props.values.setErrors(response.Errors);
        props.values.changePassword('');
        props.values.changeConfirmPassword('');
      }
    }
  }

  return (
    <View style={styles.button}>
      <Button
        onPress={validate}
        title="Create Account"
        color="#328FE6"
        accessibilityLabel="Create account button"
      />
    </View>
  )
}

export default SubmitButton
