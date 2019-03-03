import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Post from './components/Post';

const image_1 = require('../../assets/post_placeholder_1.jpg');
const image_2 = require('../../assets/post_placeholder_2.jpg');
const image_3 = require('../../assets/post_placeholder_3.jpg');


export default class Feed extends Component {
  render() {
    return (
      <ScrollView>
        <Post
          name="Bruce Wayne"
          location="Gotham"
          image={image_1}
        />
        <Post
          name="Jim Gordon"
          location="Gotham"
          image={image_2}
        />
        <Post
          name="Alfred Pennyworth"
          location="Gotham"
          image={image_3}
        />
      </ScrollView>
    );
  }
}
