/* @flow */

import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './styles';
import { login } from '@components/ApiCaller';
import { Actions } from 'react-native-router-flux';
import getHash from '@components/Hash';

const SubmitButton = (props: Props): React$Element<any> => {
  const username = props.loginInfo.username;
  const password = props.loginInfo.password;
  const setApiResponse = props.setApiResponse;
  const setErrors = props.setErrors;
  const setPassword = props.setPassword;

  const validate = (username, password) => {
    if (username === '' || password === '') {
      const errors = [];
      if (username === '') {
        errors.push("Username is required");
      }
      if (password === '') {
        errors.push("Password is required");
      }
      setErrors(errors);
    }
    else {
      login(username, getHash(username, password), handleResponse);
    }
  }

  const handleResponse = (response) => {
    setApiResponse(response.Success, response.Token);
    if (response.Errors !== null) {
      setErrors(response.Errors);
      setPassword('');
    }
    if (response.Success) {
      Actions.launch
    }
  }

  return (
    <View style={styles.button}>
      <Button
        onPress={() => validate(username, password)}
        title="Login"
        color="#328FE6"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}

export default SubmitButton
