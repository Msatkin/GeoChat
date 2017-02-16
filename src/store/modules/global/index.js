/* @flow */

import type { Global } from './types';
import update from 'react-addons-update';

type Action = {
  type: string,
  payload: object,
}

const SET_TOKEN = 'SET_TOKEN';
const SET_LOCATION = 'SET_LOCATION';
const SET_USERNAME = 'SET_GLOBAL_USERNAME';

const initalState = {
    token: '',
    username: '',
    location: {
      latitude: 0,
      longitude: 0,
    }
}

export default function global(state: Global = initalState, action: Action): Global {
  switch (action.type) {
    case SET_TOKEN:
      return state = update(state, {
        token: {$set: action.payload.token}
      });
    case SET_USERNAME:
      return state = update(state, {
        token: {$set: action.payload.username}
      });
    case SET_LOCATION:
      return state = update(state, {
        location: {$set: action.payload}
      });
    default:
      return state
  }
}

export const setToken = (token): Action => ({
  type: SET_TOKEN,
  payload: { token: token }
})

export const setUser = (username): Action => ({
  type: SET_USERNAME,
  payload: { username: username }
})

export const setLocation = (latitude, longitude): Action => ({
  type: SET_LOCATION,
  payload: {
      latitude: longitude,
      longitude: longitude,
    }
})

export const globalActions = { setToken, setUser, setLocation };