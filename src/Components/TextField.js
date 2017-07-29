import React from 'react';
import {View, Text, TextInput} from 'react-native';

class TextField extends React.Component{

  render(){
    const {
          placeholder, 
          onChangeText,
          keyboardType, 
          secureTextEntry, 
          label
        } = this.props;
    
    return(
      <View style={{margin: 10, }}>
        <Text style={styles.textStyles}>{label}</Text>
        <TextInput 
        placeholder= {placeholder}
        onChangeText= {onChangeText}
        secureTextEntry= {secureTextEntry}
        keyboardType= {keyboardType}
        style={styles.boxStyles}
        />
      </View>
    );
  }
}
const styles={
  textStyles:{
    color: '#757575',
    fontSize: 15
  },
  boxStyles:{
    borderBottomColor: '#616161',
    height: 35,
    borderBottomWidth: 2,
  }

}
export default TextField;