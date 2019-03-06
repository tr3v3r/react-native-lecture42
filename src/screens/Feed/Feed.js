import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, ActivityIndicator, View, RefreshControl,
} from 'react-native';

import { map } from 'lodash';

import Post from './components/Post';

import { getPosts } from '../../api';

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
    refreshing: false,
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const posts = await getPosts();
    this.setState({ posts, refreshing: false });
  }

  onRefresh = () => {
    this.setState({ refreshing: true }, this.loadPosts);
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
    const { posts, refreshing } = this.state;

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
      <ScrollView
        refreshControl={(
          <RefreshControl
            refreshing={refreshing}
            onRefresh={this.onRefresh}
          />
        )}
      >
        {this.renderPosts()}
      </ScrollView>
    );
  }
}
