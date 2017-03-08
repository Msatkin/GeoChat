/* @flow */

import type { Post } from './types';
import update from 'react-addons-update';

type Action = {
    type: string,
    payload: object
}

const initalState = {
  delay: '1',
  message: '',
}

const SET_DELAY = 'SET_DELAY';
const SET_MESSAGE = 'SET_MESSAGE';

export default function post(state : Post = initalState, action : Action) : Post {
    switch(action.type) {
        case SET_DELAY:
            return state = update(state, {
                delay: {
                    $set: action.payload.delay
                }
            });
        case SET_MESSAGE:
            return state = update(state, {
                message: {
                    $set: action.payload.message
                }
            });
        default:
            return state;
    }
}

export const setDelay = (delay) : Action => ({
  type: SET_DELAY,
  payload: {
    delay: delay
  }
});

export const setMessage = (message) : Action => ({
  type: SET_MESSAGE,
  payload: {
    message: message
  }
});

export const postFunctions = { setDelay, setMessage}