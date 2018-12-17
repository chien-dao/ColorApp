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
import { fromJS } from 'immutable';

const initialState = fromJS({
  app: {}
});

// const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  // nav: navReducer,
  app: reducer
});
const sagaMiddleware = createSagaMiddleware();

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = [
  // createReactNavigationReduxMiddleware(
  //   "root",
  //   state => state.nav
  // ),
  sagaMiddleware
]

// const App = reduxifyNavigator(AppNavigator, "root");
// const mapStateToProps = (state) => ({
//   state: state.nav,
// });
// const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  appReducer,
  initialState,
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
