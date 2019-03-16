import React, { Component } from 'react';
import {
  Image, TextInput, ScrollView, TouchableOpacity, Text, View,
} from 'react-native';

import { ListItem } from 'react-native-elements';

import { addPost } from '../../api';

import { styles } from './styles';

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
      'isOwn': true,
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
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri }} />
          <TextInput
            placeholder="Write your name..."
            style={styles.input}
            onChangeText={this.onChangeText}
          />
        </View>
        <ListItem
          title="Tag People"
          bottomDivider
          topDivider
          chevron
        />
        <ListItem
          title="Add Location"
          bottomDivider
          chevron
        />
        <ListItem
          title="Facebook"
          switch
        />
        <ListItem
          title="Twitter"
          switch
        />
        <ListItem
          title="Tumblr"
          switch
        />
      </ScrollView>
    );
  }
}
