/* @flow */

import type { Register } from './types'

type Action = {
  type: string,
  text: string,
}

const CHANGE_EMAIL = 'CHANGE_EMAIL'
const CHANGE_USERNAME = 'CHANGE_USERNAME'
const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
const CHANGE_CONFIRM_PASSWORD = 'CHANGE_CONFIRM_PASSWORD'

const initalState = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
}
export default function register(state: Register = initalState, action: Action): Register {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state.email = action.text;
    case CHANGE_USERNAME:
      return state.username = action.text;
    case CHANGE_PASSWORD:
      return state.password = action.text;
    case CHANGE_CONFIRM_PASSWORD:
      return state.confirmPassword = action.text;
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