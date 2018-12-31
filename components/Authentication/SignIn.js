import React from 'react';
import {
  View,
  AsyncStorage,
  TextInput
} from 'react-native';
import {
  Card,
  Button,
  FormLabel
} from "react-native-elements";
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  userLoggingIn
} from '../../actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectPassword, makeSelectEmail } from '../../sagas/selector';

const SignInPage = ({ navigation, onChangeEmail, onChangePassword, onSubmit, emailVal, passwordVal }) => {
  let email;
  let password;
  console.log('email', emailVal);
  console.log('password', passwordVal);
  return (
    <View style={{ paddingVertical: 20 }}>
      <Card>
        <FormLabel>Email</FormLabel>
        <TextInput
          placeholder="Email address..."
          ref={ref => email = ref}
          onChangeText={onChangeEmail}
        />
        <FormLabel>Password</FormLabel>
        <TextInput
          password
          placeholder="Password..."
          ref={ref => password = ref}
          onChangeText={onChangePassword}
        />

        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="#03A9F4"
          title="Sign in"
          onPress={onSubmit}
        />
      </Card>
    </View>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeEmail: (email) => dispatch(emailChanged(email)),
    onChangePassword: (password) => dispatch(passwordChanged(password)),
    onSubmit: () => dispatch(userLoggingIn())
  }
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);