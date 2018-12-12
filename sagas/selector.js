import { createSelector } from 'reselect';

const selectUser = (state) => state.get('user');

const makeSelectEmail = () => createSelector(
  selectUser,
  (userState) => userState.get('email')
);

const makeSelectPassword = () => createSelector(
  selectUser,
  (userState) => userState.get('password')
);

const makeSelectToken = () => createSelector(
  selectUser,
  (userState) => userState.get('token')
);

export {
  selectUser,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectToken
};