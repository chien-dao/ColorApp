import { createSwitchNavigator } from 'react-navigation';
import AuthScreen from '../Authentication';
import HomeScreen from '../ColorScreen';

export default createSwitchNavigator(
  {
    App: HomeScreen,
    Auth: AuthScreen,
  },
  {
    initialRouteName: 'Auth',
  }
);