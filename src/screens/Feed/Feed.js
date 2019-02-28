import React, { Component } from 'react';
import { View } from 'react-native';

import Post from './components/Post';


export default class Feed extends Component {
  render() {
    return (
      <View>
        <Post />
      </View>
    );
  }
}
