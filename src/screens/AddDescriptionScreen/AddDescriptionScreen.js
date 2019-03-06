import React, { Component } from 'react';
import {
  Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, Text,
} from 'react-native';

import { addPost } from '../../api';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 30,
  },
  image: {
    width: 100,
    height: 100,
  },
  input: {
    flex: 0.8,
    marginVertical: 10,
    alignSelf: 'flex-start',
    padding: 0,
    borderBottomWidth: 1,
  },
});

export default class AddDescriptionScreen extends Component {
  static navigationOptions({ navigation }) {
    async function onSharePress() {
      const sharePost = navigation.getParam('sharePost');
      await sharePost();
      navigation.navigate('HomeNavigator');
    }

    return {
      title: 'New Post',
      headerForceInset: { top: 'never' },
      headerTintColor: '#34393d',
      headerTitleContainerStyle: {
        justifyContent: 'center',
      },
      headerRight: (
        <TouchableOpacity style={{ marginRight: 10 }} onPress={onSharePress}>
          <Text>Share</Text>
        </TouchableOpacity>
      ),
      headerStyle: {
        height: 40,
      },
    };
  }

  constructor(props) {
    super(props);
    props.navigation.setParams({ sharePost: this.sharePost });

    this.state = {
      value: '',
      uri: this.props.navigation.getParam('uri'),
    };
  }

  sharePost = () => {
    return addPost({
      'name': this.state.value,
      'image': { uri: this.state.uri },
      'location': 'Belarus',
    });
  }

  onChangeText = value => {
    this.setState({ value });
  }

  render() {
    const { uri } = this.state;

    return (
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="never"
      >
        <Image style={styles.image} source={{ uri }} />
        <TextInput
          placeholder="Write your name..."
          style={styles.input}
          onChangeText={this.onChangeText}
        />

      </ScrollView>
    );
  }
}
