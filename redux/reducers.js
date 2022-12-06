import {
  DELETE_EVENT,
  ADD_EVENT,
  COMPLETE_EVENT,
  INCREMENT_REWARD_POINTS,
  DECREMENT_REWARD_COUNT,
  ADD_CHILD,
  REMOVE_CHILD,
  ADD_HOBBY,
  REMOVE_HOBBY,
  SET_CURRENT_USER,
  ADD_USER,
  SET_LOGIN_MESSAGE_FLAG,
  INCREMENT_EVENTS_ATTENDING,
} from "../redux/actions";
import { INITIAL_STATE } from "./state";

const initialState = INITIAL_STATE;

export function calenderReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_EVENT:
      return {
        ...state,
        calender_events: state.calender_events.filter(
          (item) => item !== action.payload
        ),
      };
    case ADD_EVENT:
      return {
        ...state,
        calender_events: [...state.calender_events, action.payload],
      };
    case COMPLETE_EVENT:
      return {
        ...state,
        calender_events: state.calender_events
          .map((event) => {
            if (event.id == action.payload) {
              return { ...event, completed: true };
            }
            return event;
          })
          .sort((a, b) => a.completed - b.completed),
      };
    default:
      return state;
  }
}

export function hobbyReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HOBBY:
      return {
        ...state,
        hobbies: [...state.hobbies, action.payload],
      };
    case REMOVE_HOBBY:
      return {
        ...state,
        hobbies: state.hobbies.filter((item) => item !== action.payload),
      };
    case INCREMENT_EVENTS_ATTENDING:
      return {
        ...state,
        hobbies: state.hobbies.map((hobby) => {
          if (hobby.id == action.payload) {
            return { ...hobby, events_attending: hobby.events_attending + 1 };
          }
          return hobby;
        }),
      };
    default:
      return state;
  }
}

export function rewardsReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_REWARD_POINTS:
      return {
        ...state,
        reward_stats: { ...state.reward_stats, reward_points: action.payload },
      };
    case DECREMENT_REWARD_COUNT:
      return {
        ...state,
        reward_stats: { ...state.reward_stats, reward_counter: action.payload },
      };
    default:
      return state;
  }
}

export function childrenReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHILD:
      return {
        ...state,
        children: [...state.children, action.payload],
      };
    case REMOVE_CHILD:
      return {
        ...state,
        children: state.children.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        current_user: action.payload,
      };
    default:
      return state;
  }
}

export function loginMessageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_MESSAGE_FLAG:
      return {
        ...state,
        login_message_flag: action.payload,
      };
    default:
      return state;
  }
}