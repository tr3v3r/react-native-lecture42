import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { Header, BottomPanel } from './components';


export default class Post extends Component {
  render() {
    const { name, location, image } = this.props;

    return (
      <View>
        <Header
          name={name}
          location={location}
        />
        <Image
          source={image}
          resizeMode="cover"
          style={{
            height: 300,
            width: undefined,
          }}
        />
        <BottomPanel />
      </View>
    );
  }
}
