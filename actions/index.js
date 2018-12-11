export const USER_LOADING = 'USER_LOADING';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const COLORS_LOADING = 'COLORS_LOADING';
export const COLORS_LOADED = 'COLORS_LOADED';

export function userLoggingIn() {
  return {
    type: USER_LOADING
  };
}

export function userLoggedIn(email, token) {
  return {
    type: USER_LOADING,
    email,
    token
  };
}

export function userLogOut() {
  return {
    type: USER_LOGOUT
  };
}

export function colorsLoading() {
  return {
    type: COLORS_LOADING
  };
}

export function colorsLoaded(colors) {
  return {
    type: COLORS_LOADED,
    colors
  };
}