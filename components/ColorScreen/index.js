import React from 'react';
import {
  View,
  Text,
  Button,
  AsyncStorage,
  NavigationActions,
} from 'react-native';
import {
  Card,
  FormLabel,
  FormInput
} from "react-native-elements";
import { connect } from 'react-redux';
import {
  makeSelectPassword,
  makeSelectEmail
} from '../../sagas/selector';
import { createStructuredSelector } from 'reselect';
import { userLogOut } from '../../actions';

const ColorScreen = ({ navigation, email, password, onSignOut }) => {
  console.log(email, password);
  return (
    <View style={{ paddingVertical: 20 }}>
      <Text>Color screen</Text>
      <Text>{email}</Text>
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="Sign out"
        onPress={onSignOut}
      />
    </View>
  )
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
});

const mapDispatchToProps = (dispatch) => ({
  onSignOut: () => {
    AsyncStorage.removeItem('userToken');
    NavigationActions.navigate({ routerName: 'Auth' });
    dispatch(userLogOut());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorScreen);