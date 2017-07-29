import React from 'react';
import {
  View,
  Text
} from 'react-native';
import TextField from '../Components/TextField';
import Button from '../Components/Button';
import firebase from 'firebase';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
  }
  static navigationOptions = {
    title: 'Login'
  }
  verifyUser() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    this.props.navigation.navigate('content');

  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TextField
          label='Email'
          onChangeText={(email) => this.setState({ email })}
          keyboardType='email-address'
        />

        <TextField
          label='password'
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry

        />
        <View style= {{alignItems: 'center'}}>
          <Button
            label='Login'
            onPress={() => this.verifyUser()}
          />
          <View style={{ marginTop: 20 }} >
            <Text style={{ color: '#757575' }}>  No Account ?</Text>
          </View>
          <Button
            label='SignUp'
            onPress={() => navigate('signup')}
          />
        </View>
      </View>

    );

  }
}
export default LoginForm;