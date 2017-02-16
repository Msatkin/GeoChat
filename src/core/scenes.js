/* @flow */

import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import { LaunchScene } from '@Launch/scenes';
import { LoginScene } from '@Login/scenes';
import { RegisterScene } from '@Register/scenes';

export default Actions.create(
  <Scene key="root">
    <Scene key="LoginContainer">
      <Scene key="login" component={LoginScene} title="Login"/>
      <Scene key="register" component={RegisterScene} title="Register"/>
    </Scene>
    <Scene key="MainContainer">
      <Scene key="launch" component={LaunchScene} title="Launch"/>
    </Scene>
  </Scene>
)
