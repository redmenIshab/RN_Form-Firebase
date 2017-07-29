import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

class Button extends React.Component {
  render() {
    const { label, onPress, } = this.props;

    return (
      <View >
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
          <Text style= {styles.textStyle} >  {label}  </Text>
        </TouchableOpacity>
      </View>
    );

  }
}
const styles={
  buttonStyle:{
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#2196F3',
    marginTop: 5,
  },
  textStyle:{
    color:'#fff',
    flex: 1,
    fontSize: 15,
    margin: 5
  }
}
export default Button;