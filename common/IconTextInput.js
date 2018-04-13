import React from 'react';
import { TextInput, View, Text, Image } from 'react-native';

const IconTextInput = ({ label, value, placeholder, onChangeText,source }) => {
  const { inputStyle, labelStyle, containerStyle, iconStyle } = styles;

  return (
    <View style={containerStyle}>
      <Image style={iconStyle} source={source}/>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}

      />
    </View>
  );
};

const styles = {
  iconStyle:{
    flex: 1,
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  inputStyle: {
    color: '#2f4f4f',
    paddingRight: 20,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'right',
    flex: 2
  },
  labelStyle: {
    fontSize: 15,
    paddingLeft: 0,
    textAlign: 'left',
    color: '#2f4f4f',
    flex: 3
  },
  containerStyle: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom:10,
    backgroundColor: 'whitesmoke',
    borderBottomWidth:0.5,
    borderColor:'#708090',
  }
};

export { IconTextInput };
