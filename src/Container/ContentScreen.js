import React from 'react';
import {
  View ,
  Text
} from 'react-native';

class ContentScreen extends React.Component{
  static navigationOptions={
    title: 'Job Offers and News'
  }
  render(){
    return(
      <View style={{ 
        backgroundColor: '#CE93D8',
        alignItems:'center',
        flex : 1,
        justifyContent: 'center'
        }}>
        <Text style={{fontSize: 30, color: '#fff'}}>
          Welcome to the Main Screen!!
        </Text>
      </View>
    );
  }
}
export default ContentScreen;