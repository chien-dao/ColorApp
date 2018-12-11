import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import SignInScreen from './SignIn';
import SignUpScreen from './SignUp';

export default createBottomTabNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
});
