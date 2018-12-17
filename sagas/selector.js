import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('app');

const selectUser = () => createSelector(
  selectGlobal,
  (state) => state.get('user')
);

const makeSelectEmail = () => createSelector(
  selectUser,
  (userState) => {
    console.log(selectUser);
    userState.get('email');
  }
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