import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { calenderReducer, hobbyReducer } from './reducers';
import thunk from 'redux-thunk';
 
const rootReducer = combineReducers({calenderReducer, hobbyReducer});
 
export const Store = createStore(rootReducer, applyMiddleware(thunk));