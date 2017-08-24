import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import todoApp from './../reducers';

const middleware = applyMiddleware(promise(), thunk, logger);

const listStore = createStore(todoApp, middleware);

export default listStore;