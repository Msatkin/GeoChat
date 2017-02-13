/* @flow */

import type { Login } from './types'

type Action = {
  type: string,
  text: string,
}

const CHANGE_USERNAME = 'CHANGE_USERNAME'
const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

const initalState = {
    username: '',
    password: '',
}
export default function login(state: Login = initalState, action: Action): Login {
  console.log(action);
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.username = action.text;
    case CHANGE_PASSWORD:
      return state.password = action.text;
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
