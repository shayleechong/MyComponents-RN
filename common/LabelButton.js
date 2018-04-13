import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

const LabelButton = ({ label, placeholder, onPress }) => {
  const { inputStyle, labelStyle, containerStyle, place } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TouchableOpacity style={inputStyle} onPress={onPress} >
        <Text style={place}>
          {placeholder} >
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  inputStyle: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 5,
  },
  place:{
    fontSize: 17,
    color: '#2f4f4f',
    textAlign: 'right',
  },
  labelStyle: {
    fontSize: 17,
    paddingLeft: 20,
    textAlign: 'left',
    color: '#2f4f4f',
    flex: 3
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom:5,
    borderBottomWidth:0.5,
    borderBottomTop:0.5,
    borderColor:'#708090',

  }
};

export { LabelButton };
