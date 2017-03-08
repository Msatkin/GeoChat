/* @flow */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import promiseMiddleware from '@store/middlewares/promiseMiddleware';
import * as reducers from './reducers';
import { composeWithDevTools } from 'remote-redux-devtools';
import GeoLocation from '@components/GeoLocation';

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });

const enhancer = composeEnhancers(
  applyMiddleware(
    reduxThunkMiddleware,
    promiseMiddleware
  ),
)
export let Store = null;

export default function configureStore(initialState) {
  console.log('creating store');
  const store = createStore(
    combineReducers({ ...reducers }),
    initialState,
    enhancer
  )
  Store = store;
  GeoLocation();
  return store
}
