/* @flow */

import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './styles';
import { login } from '@components/ApiCaller';
import { Actions } from 'react-native-router-flux';
import getHash from '@components/Hash';
import messageLoader from '@components/MessageLoader';

const SubmitButton = (props: Props): React$Element<any> => {
  const username = props.values.login.username;
  const password = props.values.login.password;

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
    if (response.Success) {
      console.log('Login was successful')
      props.values.setToken(response.Token);
      props.values.setUser(username);
      props.values.changeUsername('');
      props.values.changePassword('');
      props.values.setErrors([]);
      messageLoader();
      Actions.MessagesContainer();
    }
    else {
      console.log('Login failed')
      if (response.Errors !== null) {
        console.log('Errors', response.Errors);
        props.values.setErrors(response.Errors);
        props.values.changePassword('');
      }
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
