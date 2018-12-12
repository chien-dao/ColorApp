import {
  createStackNavigator,
} from 'react-navigation';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
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

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = [
  createReactNavigationReduxMiddleware(
    "root",
    state => state.nav
  ),
  sagaMiddleware
]

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  appReducer,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
