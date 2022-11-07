import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { calenderReducer, hobbyReducer, userReducer, rewardsReducer } from './reducers';
import thunk from 'redux-thunk';
 
const rootReducer = combineReducers({calenderReducer, hobbyReducer, userReducer, rewardsReducer });
 
export const Store = createStore(rootReducer, applyMiddleware(thunk));