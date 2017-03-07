/* @flow */

import type { Messages } from './types';
import update from 'react-addons-update';

type Action = {
    type: string,
    payload: object
}

const initalState = {}

export default function messages(state : Messages = initalState, action : Action) : Messages {
    switch(action.type) {
        default:
            return state;
    }
}

export const messagesFunctions = {}