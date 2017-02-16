/* @flow */

import type {Register}
from './types';
import update from 'react-addons-update';

type Action = {
  type: string,
  payload: object
}

const CHANGE_EMAIL = 'REGISTER_CHANGE_EMAIL';
const CHANGE_USERNAME = 'REGISTER_CHANGE_USERNAME';
const CHANGE_PASSWORD = 'REGISTER_CHANGE_PASSWORD';
const CHANGE_CONFIRM_PASSWORD = 'REGISTER_CHANGE_CONFIRM_PASSWORD';
const SET_ERRORS = 'REGISTER_SET_ERRORS';
const SET_API_RESPONSE = 'REGISTER_SET_API_RESPONSE';

const initalState = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  errors: [],
  apiCall: {
    passed: null,
    token: null
  }
}
export default function register(state : Register = initalState, action : Action) : Register {
  switch(action.type) {
    case CHANGE_EMAIL:
      return state = update(state, {
        email: {
          $set: action.payload.text
        }
      })
    case CHANGE_USERNAME:
      return state = update(state, {
        username: {
          $set: action.payload.text
        }
      })
    case CHANGE_PASSWORD:
      return state = update(state, {
        password: {
          $set: action.payload.text
        }
      })
    case CHANGE_CONFIRM_PASSWORD:
      return state = update(state, {
        confirmPassword: {
          $set: action.payload.text
        }
      })
    case SET_ERRORS:
      return state = update(state, {
        errors: {
          $set: action.payload.errors
        }
      });
    case SET_API_RESPONSE:
      return state = update(state, {
        apiCall: {
          passed: {
            $set: action.payload.passed
          },
          token: {
            $set: action.payload.token
          }
        }
      });
    default:
      return state
  }
}

export const changeEmail = (text) : Action => ({
  type: CHANGE_EMAIL,
  payload: {
    text: text
  }
})

export const changeUsername = (text) : Action => ({
  type: CHANGE_USERNAME,
  payload: {
    text: text
  }
})

export const changePassword = (text) : Action => ({
  type: CHANGE_PASSWORD,
  payload: {
    text: text
  }
})

export const changeConfirmPassword = (text) : Action => ({
  type: CHANGE_CONFIRM_PASSWORD,
  payload: {
    text: text
  }
})

export const setErrors = (errors) : Action => ({
  type: SET_ERRORS,
  payload: {
    errors: errors
  }
})

export const setApiResponse = (passed, token) : Action => ({
  type: SET_API_RESPONSE,
  payload: {
    passed: passed,
    token: token
  }
});

export const registerFunctions = {
  changeEmail,
  changeUsername,
  changePassword,
  changeConfirmPassword,
  setErrors,
  setApiResponse
};