import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  CameraRoll,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  StatusBar,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pickedImage: {
    width: undefined,
    height: 300,
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: (screenWidth - 3) / 4,
    height: (screenWidth - 3) / 4,
    marginRight: 1,
    marginTop: 1,
  },
  picked: {
    opacity: 0.3,
  },
});

export default class ChooseFromLibraryScreen extends Component {
  state = {
    photos: [],
    pickedImage: '',
  }

  componentDidMount = async () => {
    if (Platform.OS === 'ios') {
      const r = await CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      });

      const photos = r.edges.map(p => p.node.image.uri);
      this.setState({ photos, pickedImage: photos[0] });
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Cool Photo App Camera Permission',
            message:
                'Cool Photo App needs access to your camera '
                + 'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const r = await CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
          });

          const photos = r.edges.map(p => p.node.image.uri);
          this.setState({ photos, pickedImage: photos[0] });
        } else {
          const error = { message: 'Access denied!' };
          throw error;
        }
      } catch (error) {
        alert(error.message);
      }
    }
  };

  onPress = (pickedImage) => () => {
    this.setState({ pickedImage });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.pickedImage}
          resizeMode="cover"
          source={{ uri: this.state.pickedImage }}
        />
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          bounces={false}
        >
          {this.state.photos.map((uri, i) => {
            const isPicked = this.state.pickedImage === uri;

            return (
              <TouchableOpacity
                activeOpacity={1}
                key={uri}
                onPress={this.onPress(uri)}
              >
                <Image
                  style={[
                    styles.image,
                    (i + 1) % 4 === 0 && { marginRight: 0 },
                    isPicked && styles.picked,
                  ]}
                  source={{ uri }}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <StatusBar hidden animated />
      </View>
    );
  }
}
