import {
  createStackNavigator,
} from 'react-navigation';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { combineReducers } from 'redux-immutable';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import React from 'react';

import AppNavigator from './components/App';
import reducer from './reducers';
import rootSaga from './sagas';

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer,
  app: reducer
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  appReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
type Props = {};
export default class Root extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
