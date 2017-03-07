/* @flow */

import type { Post } from './types';
import update from 'react-addons-update';

type Action = {
    type: string,
    payload: object
}

const initalState = {}

export default function post(state : Post = initalState, action : Action) : Post {
    switch(action.type) {
        default:
            return state;
    }
}

export const postFunctions = {}