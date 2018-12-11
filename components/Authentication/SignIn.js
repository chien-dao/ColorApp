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
import request from '../../request';

export default ({ navigation, dispatch }) => {
  let email;
  let password;
  return (
    <View style={{ paddingVertical: 20 }}>
      <Card>
        <FormLabel>Email</FormLabel>
        <TextInput placeholder="Email address..." ref={ref => this.email = ref} />
        <FormLabel>Password</FormLabel>
        <TextInput secureTextEntry placeholder="Password..." ref={ref => this.password = ref} />

        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="#03A9F4"
          title="Sign in"
          onPress={() => {
            request.get('/login', {
              email: this.email.value,
              password: this.password.value
            }).then(data => {

            })
            navigation.navigate("App");
          }}
        />
      </Card>
    </View>
  )
};
