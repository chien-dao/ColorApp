import {
  USER_LOADING,
  USER_LOGIN,
  USER_LOGOUT,
  COLORS_LOADING,
  COLORS_LOADED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions';

const initialState = {
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
}

function appReducer(state = initialState, action) {
  switch(action.type) {
    case USER_LOADING:
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
        }
      };
    case USER_LOGIN:
      return {
        ...state,
        user: {
          loading: false,
          token: action.token
        }
      };
    case EMAIL_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email
        }
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password
        }
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: {
          loading: false,
          email: false,
          password: false,
          token: false
        }
      };
    case COLORS_LOADING:
      return {
        ...state,
        colorApp: {
          ...state.colorApp,
          loading: true
        }
      };
    case COLORS_LOADED:
      return {
        ...state,
        colorApp: {
          loading: false,
          listColor: action.colors
        }
      }
    default:
      return state;
  }
}

export default appReducer;