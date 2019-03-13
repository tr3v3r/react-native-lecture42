import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Video from 'react-native-video';

import { Header, BottomPanel } from './components';


const styles = StyleSheet.create({
  image: {
    height: 250,
    width: undefined,
  },
  videoContainer: {
    height: 250,
    backgroundColor: 'black',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});


export default class Post extends Component {
  getImage = () => {
    const { image } = this.props;

    return (
      <Image
        source={image}
        resizeMode="cover"
        style={styles.image}
      />
    );
  }

  getVideo = () => {
    const { video } = this.props;

    return (
      <View style={styles.videoContainer}>
        <Video
          source={video}
          style={styles.video}
          controls={true}
          paused={true}
        />
      </View>
    );
  }


  render() {
    const {
      name, location, image, video,
    } = this.props;

    const postContent = video ? this.getVideo() : this.getImage();

    return (
      <View>
        <Header
          name={name}
          location={location}
        />
        {postContent}
        <BottomPanel />
      </View>
    );
  }
}
