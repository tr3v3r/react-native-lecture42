import React, { Component } from 'react';
import {
  StyleSheet, View, ActivityIndicator, Image, Dimensions,
} from 'react-native';
import { map } from 'lodash';


const SCREEN_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photosContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  image: {
    width: (SCREEN_WIDTH - 10 * 2 - 3 * 3) / 3,
    height: (SCREEN_WIDTH - 10 * 2 - 3 * 3) / 3,
    marginRight: 2,
  },
});


export default class UserPhotos extends Component {
  renderPhotos = () => {
    const { photos } = this.props;

    const res = map(
      photos,
      (image, key) => {
        return (
          <Image
            key={key}
            style={styles.image}
            source={image}
          />
        );
      },
    );

    return res;
  }

  render() {
    const { photos } = this.props;

    if (!photos) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.photosContainer}>
        {this.renderPhotos()}
      </View>
    );
  }
}
