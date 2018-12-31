import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import AuthScreen from '../Authentication';
import HomeScreen from '../ColorScreen';

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('WTF');
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default createAppContainer(createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: HomeScreen,
    Auth: AuthScreen,
  },
  {
    initialRouteName: 'Loading',
  }
));