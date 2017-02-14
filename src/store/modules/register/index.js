/* @flow */

import type { Register } from './types';
import update from 'react-addons-update';

type Action = {
  type: string,
  text: string,
}

const CHANGE_EMAIL = 'REGISTER_CHANGE_EMAIL';
const CHANGE_USERNAME = 'REGISTER_CHANGE_USERNAME';
const CHANGE_PASSWORD = 'REGISTER_CHANGE_PASSWORD';
const CHANGE_CONFIRM_PASSWORD = 'REGISTER_CHANGE_CONFIRM_PASSWORD';

const initalState = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
}
export default function register(state: Register = initalState, action: Action): Register {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state = update(state, {
        email: {$set: action.text}
      })
    case CHANGE_USERNAME:
      return state = update(state, {
        username: {$set: action.text}
      })
    case CHANGE_PASSWORD:
      return state = update(state, {
        password: {$set: action.text}
      })
    case CHANGE_CONFIRM_PASSWORD:
      return state = update(state, {
        confirmPassword: {$set: action.text}
      })
    default:
      return state
  }
}

export const changeEmail = (text): Action => ({
  type: CHANGE_EMAIL,
  text: text,
})

export const changeUsername = (text): Action => ({
  type: CHANGE_USERNAME,
  text: text,
})

export const changePassword = (text): Action => ({
  type: CHANGE_PASSWORD,
  text: text,
})

export const changeConfirmPassword = (text): Action => ({
  type: CHANGE_CONFIRM_PASSWORD,
  text: text,
})