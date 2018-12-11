import {
  USER_LOADING,
  USER_LOGIN,
  USER_LOGOUT,
  COLORS_LOADING,
  COLORS_LOADED
} from '../actions';

const initialState = {
  user: {
    loading: false,
    email: false,
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
          email: action.email,
          token: action.token
        }
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: {
          loading: false,
          email: false,
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