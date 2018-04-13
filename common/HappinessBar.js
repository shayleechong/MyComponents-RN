import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

class HappinessBar extends Component{

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.icon} source={require('../icons/happy.png')}/>
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image style={styles.icon} source={require('../icons/sceptic.png')}/>
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image style={styles.icon} source={require('../icons/sad.png')}/>
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles ={
  container:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'grey'
  },
  icon:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  text:{
    fontSize:10,
    paddingLeft: 5,
  },
  button:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export { HappinessBar };
