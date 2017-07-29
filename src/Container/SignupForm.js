import React from 'react';
import { View } from 'react-native';
import Button from '../Components/Button';
import TextField from '../Components/TextField';
import firebase from 'firebase';

class SignupForm extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
  }
  validateUser() {
    if (this.state.password == this.state.confirmPassword) {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
      this.props.navigation.navigate('login');
    }
    else {
      alert('password did not match');

    }
  }
  render() {

    return (
      <View>
        <TextField
          label='Username'
        />
        <TextField
          label='Email'
          onChangeText={(email) => this.setState({ email })}
          keyboardType='email-address'
        />
        <TextField
          label='Password'
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry
        />
        <TextField
          label='Confirm Password'
          onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
          secureTextEntry
        />
        <Button
          label='SignUp'
          onPress={() => this.validateUser()}
        />
      </View>
    );
  }
}
export default SignupForm;