export const DELETE_EVENT = 'DELETE_EVENT';
export const ADD_EVENT = 'ADD_EVENT';

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