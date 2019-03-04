import React, { Component } from 'react';
import {
  StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  preview: {
    flex: 0.6,
    overflow: 'hidden',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  captureContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  capture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 10,
    borderColor: '#b5b6bc',
  },
});

export default class TakePhotoScreen extends Component {
  camera = React.createRef()

  state = {
    type: RNCamera.Constants.Type.back,
    uri: '',
  }

  toggleType = () => {
    this.setState(prevState => {
      if (prevState.type === RNCamera.Constants.Type.back) {
        return { type: RNCamera.Constants.Type.front };
      }

      return { type: RNCamera.Constants.Type.back };
    });
  }

  takePicture = async() => {
    try {
      if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.current.takePictureAsync(options);
        this.setState({ uri: data.uri });
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.preview}
        >
          <RNCamera
            ref={this.camera}
            style={styles.camera}
            type={this.state.type}
            flashMode={RNCamera.Constants.FlashMode.off}
            permissionDialogTitle="Permission to use camera"
            permissionDialogMessage="We need your permission to use your camera phone"
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={this.toggleType}
          >
            <SimpleLineIcons
              color="white"
              size={25}
              name="refresh"
            />
          </TouchableOpacity>


        </View>

        <View style={styles.captureContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.takePicture}
            style={styles.capture}
          />
        </View>
      </View>
    );
  }
}
