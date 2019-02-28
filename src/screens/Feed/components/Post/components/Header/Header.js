import React, { Component } from 'react';
import { View } from 'react-native';


export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          height: 56,
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 8,
        }}
      >
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40,
            borderWidth: 1,
            borderColor: 'red',
          }}
        />
      </View>
    );
  }
}
