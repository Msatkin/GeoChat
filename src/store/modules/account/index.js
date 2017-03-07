/* @flow */

import type { Account } from './types';
import update from 'react-addons-update';

type Action = {
    type: string,
    payload: object
}

const initalState = {}

export default function account(state : Account = initalState, action : Action) : Account {
    switch(action.type) {
        default:
            return state;
    }
}

export const accountFunctions = {}