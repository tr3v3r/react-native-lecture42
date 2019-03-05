import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, AsyncStorage, ActivityIndicator, View,
} from 'react-native';
import { isNull, map } from 'lodash';

import Post from './components/Post';
import { STORAGE_PATH_POSTS } from '../../common/constants';


const image_1 = require('../../assets/post_placeholder_1.jpg');
const image_2 = require('../../assets/post_placeholder_2.jpg');
const image_3 = require('../../assets/post_placeholder_3.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default class Feed extends Component {
  state = {
    posts: null,
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    AsyncStorage.getItem(
      STORAGE_PATH_POSTS,
      (error, data) => {
        const posts = JSON.parse(data);

        if (error || isNull(posts)) {
          this.savePostsToStorage();
        } else {
          this.setState({ posts });
        }
      },
    );
  }

  savePostsToStorage = () => {
    AsyncStorage.setItem(
      STORAGE_PATH_POSTS,
      JSON.stringify(
        [
          {
            name: 'Bruce Wayne',
            location: 'Gotham',
            image: image_1,
          },
          {
            name: 'Jim Gordon',
            location: 'Gotham',
            image: image_2,
          },
          {
            name: 'Alfred Pennyworth',
            location: 'Gotham',
            image: image_3,
          },
        ],
      ),
    );

    this.loadPosts();
  }

  renderPosts = () => {
    const { posts } = this.state;

    return map(
      posts,
      ({ name, location, image }, key) => {
        return (
          <Post
            key={key}
            name={name}
            location={location}
            image={image}
          />
        );
      },
    );
  }


  render() {
    const { posts } = this.state;

    if (!posts) {
      return (
        <View style={styles.container}>
          <ActivityIndicator
            size="large"
          />
        </View>
      );
    }

    return (
      <ScrollView>
        {this.renderPosts()}
      </ScrollView>
    );
  }
}
