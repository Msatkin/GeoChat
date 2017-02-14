/* @flow */

import type { Login } from './types';
import update from 'react-addons-update';

type Action = {
  type: string,
  text: string,
}

const CHANGE_USERNAME = 'LOGIN_CHANGE_USERNAME';
const CHANGE_PASSWORD = 'LOGIN_CHANGE_PASSWORD';

const initalState = {
    username: '',
    password: '',
}

export default function login(state: Login = initalState, action: Action): Login {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state = update(state, {
        username: {$set: action.text}
      })
    case CHANGE_PASSWORD:
      return state = update(state, {
        password: {$set: action.text}
      })
    default:
      return state
  }
}

export const changeUsername = (text): Action => ({
  type: CHANGE_USERNAME,
  text: text,
})

export const changePassword = (text): Action => ({
  type: CHANGE_PASSWORD,
  text: text,
})
