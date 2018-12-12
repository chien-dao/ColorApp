import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import AuthScreen from '../Authentication';
import HomeScreen from '../ColorScreen';

// const LoadingScreen = async ({ navigation }) => {
//   const userToken = await AsyncStorage.getItem('userToken');
//   navigation.navigate(userToken ? 'App' : 'Auth');
//   return (
//     <View style={styles.container}>
//       <ActivityIndicator />
//       <StatusBar barStyle="default" />
//     </View>
//   );
// }

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
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

export default createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: HomeScreen,
    Auth: AuthScreen,
  },
  {
    initialRouteName: 'Loading',
  }
);