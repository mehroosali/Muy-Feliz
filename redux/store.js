import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  calenderReducer,
  hobbyReducer,
  rewardsReducer,
  childrenReducer,
  userReducer,
  loginMessageReducer,
} from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  calenderReducer,
  hobbyReducer,
  rewardsReducer,
  childrenReducer,
  userReducer,
  loginMessageReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
