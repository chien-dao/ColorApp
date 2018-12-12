import {
  USER_LOADING,
  USER_LOGIN,
  USER_LOGOUT,
  COLORS_LOADING,
  COLORS_LOADED,
  userLoggedIn
} from '../actions';
import {
  call,
  takeLatest,
  put,
  all
} from 'redux-saga/effects';
import request from '../request';
import {
  makeSelectEmail,
  makeSelectPassword
} from './selector';
import { AsyncStorage } from 'react-native';

export function* login() {
  const email = yield select(makeSelectEmail())
  const password = yield select(makeSelectPassword());

  try {
    const auth = yield call(request, {
      method: 'post',
      url: '/login',
      data: {
        email,
        password
      }
    });
    AsyncStorage.setItem('userToken', auth.token);
    yield put(userLoggedIn(auth.token));
  } catch(err) {
    alert(err);
  }
}

export function* watchLogin() {
  yield takeLatest(USER_LOADING, login);
}

export default function* rootSaga() {
  yield all[
    watchLogin()
  ]
}