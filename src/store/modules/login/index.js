/* @flow */

import type { Login } from './types';
import update from 'react-addons-update';

type Action = {
  type: string,
  payload: object,
}

const CHANGE_USERNAME = 'LOGIN_CHANGE_USERNAME';
const CHANGE_PASSWORD = 'LOGIN_CHANGE_PASSWORD';
const UPDATE_ERRORS = 'LOGIN_UPDATE_ERRORS'
const UPDATE_API_RESPONSE = 'LOGIN_UPDATE_API_RESPONSE'

const initalState = {
    username: '',
    password: '',
    errors: [],
    apiCall: {
      passed: null,
      token: null,
    }
}

export default function login(state: Login = initalState, action: Action): Login {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state = update(state, {
        username: {$set: action.payload.text}
      });
    case CHANGE_PASSWORD:
      return state = update(state, {
        password: {$set: action.payload.text}
      });
    case UPDATE_ERRORS:
      return state = update(state, {
        errors: {$set: action.payload.errors}
      });
    case UPDATE_API_RESPONSE:
      return state = update(state, {
        apiCall: {
          passed: {$set: action.payload.passed},
          token: {$set: action.payload.token}
        }
      });
    
    default:
      return state;
  }
}

export const changeUsername = (text): Action => ({
  type: CHANGE_USERNAME,
  payload: {text: text},
});

export const changePassword = (text): Action => ({
  type: CHANGE_PASSWORD,
  payload: {text: text},
});

export const setLoginErrors = (errors): Action => ({
  type: UPDATE_ERRORS,
  payload: {errors: errors},
});

export const setLoginApiResponse = (passed,token): Action => ({
    type: UPDATE_API_RESPONSE,
    payload: {
      passed: passed,
      token: token
    },
});
