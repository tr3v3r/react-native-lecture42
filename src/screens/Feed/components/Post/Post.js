import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { Header, BottomPanel } from './components';


const image = require('../../../../assets/post_placeholder_1.jpg');


export default class Post extends Component {
  render() {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: 'red',
        }}
      >
        <Header />
        <Image
          source={image}
        />
        <BottomPanel />
      </View>
    );
  }
}
