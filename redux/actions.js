export const DELETE_EVENT = 'DELETE_EVENT';
export const ADD_EVENT = 'ADD_EVENT';
export const COMPLETE_EVENT = 'COMPLETE_EVENT';
export const INCREMENT_REWARD_POINTS = 'INCREMENT_REWARD_POINTS';
export const DECREMENT_REWARD_COUNT = 'DECREMENT_REWARD_COUNT';
export const ADD_CHILD = 'ADD_CHILD';
export const ADD_HOBBY = 'ADD_HOBBY';
export const REMOVE_HOBBY = 'REMOVE_HOBBY';

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

export const increment_reward_points = item => dispatch => {
    dispatch({
        type: INCREMENT_REWARD_POINTS,
        payload: item,
    });
};

export const decrement_reward_count = item => dispatch => {
    dispatch({
        type: DECREMENT_REWARD_COUNT,
        payload: item,
    });
};

export const add_child = item => dispatch => {
    dispatch({
        type: ADD_CHILD,
        payload: item,
    });
};

export const add_hobby = item => dispatch => {
    dispatch({
        type: ADD_HOBBY,
        payload: item,
    });
};

export const remove_hobby = item => dispatch => {
    dispatch({
        type: REMOVE_HOBBY,
        payload: item,
    });
};