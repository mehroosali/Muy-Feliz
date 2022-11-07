import {
    DELETE_EVENT, ADD_EVENT, COMPLETE_EVENT,
    REGISTER_USER, SET_CURRENT_USER, INCREMENT_REWARDS_COUNT
} from '../redux/actions'
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
        case COMPLETE_EVENT:
            return {
                ...state,
                calender_events: state.calender_events.map(event => {
                    if (event.id == action.payload) {
                        return {...event, completed:true}
                    };
                    return event;
                })
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

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                current_user: action.payload
            }
        case REGISTER_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state;
    }
}

export function rewardsReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_REWARDS_COUNT:
            return {
                ...state,
                rewards_count: action.payload
            }
        default:
            return state;
    }
}