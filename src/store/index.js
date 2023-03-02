import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middlewares = [logger];

const composedEnhances = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhances)