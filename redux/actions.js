export const DELETE_EVENT = 'DELETE_EVENT';
export const ADD_EVENT = 'ADD_EVENT';
export const COMPLETE_EVENT = 'COMPLETE_EVENT';
export const REGISTER_USER = 'REGISTER_USER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const INCREMENT_REWARDS_COUNT = 'INCREMENT_REWARDS_COUNT';

export const delete_event = item => dispatch => {
    dispatch({
        type: DELETE_EVENT,
        payload: item,
    });
};

export const add_event = item => dispatch => {
    dispatch({
        type: ADD_EVENT,
        payload: item,
    });
};

export const complete_event = item => dispatch => {
    dispatch({
        type: COMPLETE_EVENT,
        payload: item,
    });
};

export const register_user = item => dispatch => {
    dispatch({
        type: REGISTER_USER,
        payload: item,
    });
};

export const set_current_user = item => dispatch => {
    dispatch({
        type: SET_CURRENT_USER,
        payload: item,
    });
};

export const increment_rewards_count = item => dispatch => {
    dispatch({
        type: INCREMENT_REWARDS_COUNT,
        payload: item,
    });
};