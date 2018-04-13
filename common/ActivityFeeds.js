import React from 'react';
import { View, Text,Image } from 'react-native';
import Avatar from './Avatar';
import Separator from './Separator';

const ActivityFeeds = ( props ) => {
  this.state = {
    msg: props.msg || '',
    img: props.img || ''
  };
  const LIKE_ITEM = 'has like your item.';

  return(
    <View>
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.avatar}>
            <Avatar/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.state.msg}</Text>
          </View>
        </View>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={this.state.img}/>
        </View>
      </View>
      <Separator />
    </View>

  );
}

const styles={
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container2:{
    flexDirection: 'row',
  },
  avatar: {
    padding: 20
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {

  },
  image:{
    width:50,
    height:50,
    margin:10
  },
  imgContainer:{
    justifyContent: 'center'
  }
}

export { ActivityFeeds };
