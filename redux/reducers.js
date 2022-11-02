import { DELETE_EVENT, ADD_EVENT } from '../redux/actions'
import { INITIAL_STATE } from './state'

const initialState = INITIAL_STATE;

export function calenderReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_EVENT:
            return {
                ...state,
                calender_events: state.calender_events.filter(item => item !== action.payload)
            }
        case ADD_EVENT:
            return {
                ...state,
                calender_events: [...state.calender_events, action.payload]
            }
        default:
            return state;
    }
}

export function hobbyReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}