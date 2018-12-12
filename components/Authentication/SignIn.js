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

const SignInPage = ({ navigation, onChangeEmail, onChangePassword, onSubmit }) => {
  let email;
  let password;
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
          onPress={async () => {
            await onSubmit();
            navigation.navigate('App');
          }}
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
}

export default connect(null, mapDispatchToProps)(SignInPage);