import React from 'react';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './Container/HomeScreen';
import LoginForm from  './Container/LoginForm';
import SignupForm from './Container/SignupForm';
import ContentScreen from './Container/ContentScreen';

const Router = StackNavigator({

  home : {screen: HomeScreen},
  login: {screen: LoginForm},
  signup: {screen: SignupForm},
  content: {screen: ContentScreen}
});

export default Router;