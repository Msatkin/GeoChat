/* @flow */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import Reactotron from 'reactotron';
import promiseMiddleware from '@store/middlewares/promiseMiddleware';
import * as reducers from './reducers';
import { composeWithDevTools } from 'remote-redux-devtools';

Reactotron.connect({
  enabled: __DEV__,
})
const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });

const enhancer = composeEnhancers(
  applyMiddleware(
    reduxThunkMiddleware,
    promiseMiddleware,
    Reactotron.reduxMiddleware,
  ),
)

export default function configureStore(initialState) {
  console.log('creating store');
  const store = createStore(
    combineReducers({ ...reducers }),
    initialState,
    enhancer
  )
  if (__DEV__) {
    console.log(store.getState());
    Reactotron.addReduxStore(store)
  }
  return store
}
