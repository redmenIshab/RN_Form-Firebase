import React from 'react';
import { View, Text } from 'react-native';
import Button from '../Components/Button';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 4 }}>
          <View style={{
            backgroundColor: '#F3E5F5',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{ fontSize: 25, color: '#5D4037' }}>  Tired of Searching For Job </Text>
          </View>
          <View style={{
            backgroundColor: '#E1BEE7',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }} >
            <Text style={{ fontSize: 25, color: '#5D4037' }}>  We provide You service for Free</Text>
          </View>
        </View>
        <View style={{ 
           flex: 1,
           alignItems: 'center',
           justifyContent: 'center'
           }}>
          <Button label='Login'
            onPress={() => navigate('login')}
          />
        </View>
      </View>
    );
  }
}
export default HomeScreen;