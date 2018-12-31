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
  all,
  select
} from 'redux-saga/effects';
import request from '../request';
import {
  makeSelectEmail,
  makeSelectPassword
} from './selector';
import { AsyncStorage } from 'react-native';
import {NavigationActions} from 'react-navigation';

export function* login() {
  const email = yield select(makeSelectEmail())
  const password = yield select(makeSelectPassword());

  console.log(email, password);
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
    yield put(NavigationActions.navigate({ routerName: 'App' }));
  } catch(err) {
    alert(err);
  }
}

export function* watchLogin() {
  yield takeLatest(USER_LOADING, login);
}

export default function* rootSaga() {
  yield all([
    watchLogin()
  ])
}