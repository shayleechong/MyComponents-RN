import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Image,
  Text,
  View
 } from 'react-native';

class HeartButton extends Component {

  constructor(props){
    super();
    this.state = {
      liked: props.liked || true,
      count: props.likesCount || null
    };
  }

  render(){
    if ( this.state.liked ) {
      return (
        <View style={styles.heartContainer}>
          <TouchableOpacity onPress={this._handlePress.bind(this)}>
            <Image
              source={require('../icons/UnlitLove.png')}
              style={{width:15, height:15}}
            />
          </TouchableOpacity>
          <Text style={styles.heartText}>{this.state.count}</Text>
        </View>
      )

    } else {
      return (
        <View style={styles.heartContainer}>
          <TouchableOpacity onPress={this.Press.bind(this)}>
            <Image
              source={require('../icons/LitLove.png')}
              style={{width:15, height:15}}
            />
          </TouchableOpacity>
          <Text style={styles.heartText}>{this.state.count}</Text>
        </View>
      );
    }
  }

  _handlePress(){
    this.setState({
      liked: this.state.liked ? false : true,
      count: parseInt(this.state.count)+1
    });

  }

  Press(){
    this.setState({
      liked: this.state.liked ? false : true,
      count: this.state.count-1
    });

  }

};

const styles = {
  heartContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1
  },
  heartText:{
    paddingLeft: 5,
  }
}


export default HeartButton ;
