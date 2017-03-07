/* @flow */

import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import { LaunchScene } from '@Launch/scenes';
import { LoginScene } from '@Login/scenes';
import { RegisterScene } from '@Register/scenes';
import { AccountScene } from '@Account/scenes';
import { MessagesScene } from '@Messages/scenes';
import { PostScene } from '@Post/scenes';
import ForwardButton from './SceneComponents/ForwardButton';
import RegisterButton from '@Login/components/RegisterButton';
import forwardButtonImage from '@images/Buttons/forwardChevron.png';

export default Actions.create(
  <Scene key="root">
    <Scene key="LoginContainer">
      <Scene key="login" component={LoginScene} title="Login"/>
      <Scene key="register" component={RegisterScene} title="Register"/>
    </Scene>
    <Scene key="AccountContainer">
      <Scene key="account" component={AccountScene} title="Account" onRight={() => Actions.MessagesContainer()} rightTitle={"Messages"} onLeft={() => Actions.PostContainer()} leftTitle={"Post"}/>
    </Scene>
    <Scene key="MessagesContainer">
      <Scene key="messages" component={MessagesScene} title="Messages" onRight={() => Actions.PostContainer()} rightTitle={"Post"} onLeft={() => Actions.AccountContainer()} leftTitle={"Account"}/>
    </Scene>
    <Scene key="PostContainer">
      <Scene key="post" component={PostScene} title="Post"  onRight={() => Actions.AccountContainer()} rightTitle={"Account"} onLeft={() => Actions.MessagesContainer()} leftTitle={"Messages"}/>
    </Scene>
  </Scene>
)