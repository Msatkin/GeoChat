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
const SET_MESSAGES = 'SET_GLOBAL_MESSAGES';
const SET_WATCHID = 'SET_GLOBAL_WATCHID';

const initalState = {
    token: null,
    username: '',
    location: {
      latitude: 0,
      longitude: 0,
    },
    watchID: '',
    messages: [],
}

export default function global(state: Global = initalState, action: Action): Global {
  switch (action.type) {
    case SET_TOKEN:
      return state = update(state, {
        token: {$set: action.payload.token}
      });
    case SET_USERNAME:
      return state = update(state, {
        username: {$set: action.payload.username}
      });
    case SET_LOCATION:
      return state = update(state, {
        location: {$set: action.payload}
      });
    case SET_MESSAGES:
      return state = update(state, {
        messages: {$set: action.payload.messages}
      });
    case SET_WATCHID:
      return state = update(state, {
        watchID: {$set: action.payload.watchID}
      });
    default:
      return state
  }
}

export const setToken = (token): Action => ({
  type: SET_TOKEN,
  payload: { token: token }
})

export const setMessages = (messages): Action => ({
  type: SET_MESSAGES,
  payload: { messages: messages }
})

export const setWatchID = (watchID): Action => ({
  type: SET_WATCHID,
  payload: { watchID: watchID }
})

export const setUser = (username): Action => ({
  type: SET_USERNAME,
  payload: { username: username }
})

export const setLocation = (longitude, latitude): Action => ({
  type: SET_LOCATION,
  payload: {
      latitude: latitude,
      longitude: longitude,
    }
})

export const globalActions = { setToken, setUser, setLocation, setMessages, setWatchID };