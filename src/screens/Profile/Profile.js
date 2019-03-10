import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, RefreshControl,
} from 'react-native';
import { size, reduce } from 'lodash';

import UserInfo from './components/UserInfo/UserInfo';
import UserPhotos from './components/UserPhotos/UserPhotos';
import { getPosts } from '../../api';


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 5,
  },
});


export default class Profile extends Component {
  state = {
    photos: null,
    refreshing: false,
  }

  componentDidMount() {
    this.loadPosts();
  }

  onRefresh = () => {
    this.setState(
      { refreshing: true },
      this.loadPosts,
    );
  }

  loadPosts = async () => {
    const posts = await getPosts();

    const photos = reduce(
      posts,
      (acc, curr = {}) => {
        if (curr.isOwn) {
          acc.push(curr.image);
        }

        return acc;
      },
      [],
    );

    this.setState({
      photos,
      refreshing: false,
    });
  }

  render() {
    const { refreshing, photos } = this.state;

    return (
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={(
          <RefreshControl
            refreshing={refreshing}
            onRefresh={this.onRefresh}
          />
        )}
      >
        <UserInfo
          numberOfPosts={size(photos)}
        />
        <UserPhotos
          photos={photos}
        />
      </ScrollView>
    );
  }
}
