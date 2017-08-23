import { combineReducers } from 'redux';

import todos from './ListReducer';

const todoApp = combineReducers(
    {
        todos
    }
);

export default todoApp;