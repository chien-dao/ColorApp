import React from 'react';
import { View, Text } from 'react-native';
import {
  Card,
  Button,
  FormLabel,
  FormInput
} from "react-native-elements";
import { connect } from 'react-redux';

const ColorScreen = ({ navigation, state }) => (
  <View style={{ paddingVertical: 20 }}>
    <Text>Color screen</Text>
    <Text>{state.user.loading}</Text>
    <Text>{state.user.email}</Text>
    <Text>{state.user.password}</Text>
  </View>
);

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(ColorScreen);