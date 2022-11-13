import {
    DELETE_EVENT, ADD_EVENT, COMPLETE_EVENT, INCREMENT_REWARD_POINTS, DECREMENT_REWARD_COUNT, ADD_CHILD, ADD_HOBBY, REMOVE_HOBBY
} from '../redux/actions'
import { INITIAL_STATE } from './state';

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
        case ADD_HOBBY:
            return {
                ...state,
                hobbies: [...state.hobbies, action.payload]
            }   
        case REMOVE_HOBBY:
            return {
                ...state,
                hobbies: state.hobbies.filter(item => item !== action.payload)
            }         
        default:
            return state;
    }
}

export function rewardsReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_REWARD_POINTS:
            return {
                ...state,
                reward_stats: {...state.reward_stats, reward_points: action.payload }
            }
        case DECREMENT_REWARD_COUNT:
            return {
                ...state,
                reward_stats: {...state.reward_stats, reward_counter: action.payload }
            }        
        default:
            return state;
    }
}

export function childrenReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CHILD:
            return {
                ...state,
                children: [...state.children, action.payload]
            }
        default:
            return state;
    }
}