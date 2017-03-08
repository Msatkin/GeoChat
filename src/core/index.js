/* @flow */

import React from 'react';
import { Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import createStore from '@store/create';
import scenes from './scenes';
import messageLoader from '@components/MessageLoader';

const timer = require('react-native-timer');

const store = createStore();
timer.setInterval('checkMessages', messageLoader, 10000);

const Kernel = (): React$Element<any> => {
  return (
    <Provider store={store}>
      
      <Router scenes={scenes} />
    </Provider>
  )
}

export default Kernel
