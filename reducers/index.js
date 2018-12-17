import {
  USER_LOADING,
  USER_LOGIN,
  USER_LOGOUT,
  COLORS_LOADING,
  COLORS_LOADED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  user: {
    loading: false,
    email: false,
    password: false,
    token: false
  },
  colorApp: {
    loading: false,
    listColor: []
  }
});

function appReducer(state = initialState, action) {
  switch(action.type) {
    case USER_LOADING:
      return state.setIn(['user', 'loading'], true);
    case USER_LOGIN:
      return state
              .setIn(['user', 'loading'], false)
              .setIn(['user', 'token'], action.token);
    case EMAIL_CHANGED:
      return state
              .setIn(['user', 'email'], action.email);
    case PASSWORD_CHANGED:
      return state
              .setIn(['user', 'password'], action.password);
    case USER_LOGOUT:
      return state
              .setIn(['user', 'loading'], false)
              .setIn(['user', 'email'], false)
              .setIn(['user', 'password'], false)
              .setIn(['user', 'token'], false);
    case COLORS_LOADING:
      return state
              .setIn(['colorApp', 'loading'], true);
    case COLORS_LOADED:
      return state
              .setIn(['colorApp', 'loading'], false)
              .setIn(['colorApp', 'listColor'], action.colors);
    default:
      return state;
  }
}

export default appReducer;