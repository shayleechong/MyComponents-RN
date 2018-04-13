/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing
} from 'react-native';
import {  IconTextInput, LabelButton, HappinessBar, ActivityFeeds } from './common'

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      text : '' ,
      fadeAnim: new Animated.Value(0),
      spinValue : new Animated.Value(0)  // Initial value for opacity: 0
    }
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
          this.state.fadeAnim,            // The animated value to drive
          {
            toValue: 1,                   // Animate to opacity: 1 (opaque)
            duration: 10000,              // Make it take a while
          }
        ).start();   
      }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View                 // Special animatable View
        style={{
          flex: 1,
          backgroundColor: '#F5FCFF',
          justifyContent: 'center',
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
          <ActivityFeeds msg = 'has like you item.' img= {require('./icons/happy.png')}/>
      </Animated.View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center'
  }
});
