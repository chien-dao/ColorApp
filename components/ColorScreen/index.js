import React from 'react';
import { View, Text } from 'react-native';
import {
  Card,
  Button,
  FormLabel,
  FormInput
} from "react-native-elements";
import { connect } from 'react-redux';
import {
  makeSelectPassword,
  makeSelectEmail
} from '../../sagas/selector';
import { createStructuredSelector } from 'reselect';

// class ColorScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//   }

//   render() {
//     console.log(this.props);
//     return (
//       <View style={{ paddingVertical: 20 }}>
//         <Text>Color screen</Text>
//         <Text>{this.props.email}</Text>
//       </View>
//     );
//   }
// }

const ColorScreen = ({ navigation, email }) => {
  console.log(email);
  return (
    <View style={{ paddingVertical: 20 }}>
      <Text>Color screen</Text>
      <Text>{email}</Text>
    </View>
  )
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
});

export default connect(mapStateToProps)(ColorScreen);