export const DELETE_EVENT = "DELETE_EVENT";
export const ADD_EVENT = "ADD_EVENT";
export const COMPLETE_EVENT = "COMPLETE_EVENT";
export const INCREMENT_REWARD_POINTS = "INCREMENT_REWARD_POINTS";
export const DECREMENT_REWARD_COUNT = "DECREMENT_REWARD_COUNT";
export const ADD_CHILD = "ADD_CHILD";
export const REMOVE_CHILD = "REMOVE_CHILD";
export const ADD_HOBBY = "ADD_HOBBY";
export const REMOVE_HOBBY = "REMOVE_HOBBY";
export const INCREMENT_EVENTS_ATTENDING = "INCREMENT_EVENTS_ATTENDING";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const ADD_USER = "ADD_USER";
export const SET_LOGIN_MESSAGE_FLAG = "SET_LOGIN_MESSAGE_FLAG";

export const set_current_user = (item) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: item,
  });
};

export const add_user = (item) => (dispatch) => {
  dispatch({
    type: ADD_USER,
    payload: item,
  });
};

export const delete_event = (item) => (dispatch) => {
  dispatch({
    type: DELETE_EVENT,
    payload: item,
  });
};

export const add_event = (item) => (dispatch) => {
  dispatch({
    type: ADD_EVENT,
    payload: item,
  });
};

export const complete_event = (item) => (dispatch) => {
  dispatch({
    type: COMPLETE_EVENT,
    payload: item,
  });
};

export const increment_reward_points = (item) => (dispatch) => {
  dispatch({
    type: INCREMENT_REWARD_POINTS,
    payload: item,
  });
};

export const decrement_reward_count = (item) => (dispatch) => {
  dispatch({
    type: DECREMENT_REWARD_COUNT,
    payload: item,
  });
};

export const add_child = (item) => (dispatch) => {
  dispatch({
    type: ADD_CHILD,
    payload: item,
  });
};

export const remove_child = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_CHILD,
    payload: item,
  });
};

export const add_hobby = (item) => (dispatch) => {
  dispatch({
    type: ADD_HOBBY,
    payload: item,
  });
};

export const remove_hobby = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_HOBBY,
    payload: item,
  });
};

export const increment_events_attending = (item) => (dispatch) => {
  dispatch({
    type: INCREMENT_EVENTS_ATTENDING,
    payload: item,
  });
};

export const set_login_message_flag = (item) => (dispatch) => {
  dispatch({
    type: SET_LOGIN_MESSAGE_FLAG,
    payload: item,
  });
};
