import React, { Component } from 'react';
import {
  StyleSheet, View, Image, Text, TouchableOpacity,
} from 'react-native';


const avatar = require('../../../../assets/avatar_placeholder.png');

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 100,

  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  postsContainer: {
    flexDirection: 'row',
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonPanel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    color: 'black',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 5,
    marginRight: 5,
  },
  aboutContainer: {
    marginTop: 20,
  },
  name: {
    color: 'black',
  },
  accountType: {},
  description: {
    color: 'black',
  },
});


export default class UserInfo extends Component {
  render() {
    const { numberOfPosts = 0 } = this.props;

    return (
      <View style={styles.container}>

        <View style={styles.rowContainer}>
          <Image
            style={styles.avatarImage}
            source={avatar}
          />
          <View style={styles.infoContainer}>
            <View style={styles.postsContainer}>
              <View style={styles.itemInfo}>
                <Text style={styles.infoText}>{numberOfPosts}</Text>
                <Text>posts</Text>
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.infoText}>246</Text>
                <Text>followers</Text>
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.infoText}>426</Text>
                <Text>following</Text>
              </View>
            </View>
            <View style={styles.buttonPanel}>
              <TouchableOpacity style={styles.button}>
                <Text>Promotions</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.aboutContainer}>
          <Text style={styles.name}>The Batman</Text>
          <Text style={styles.accountType}>Personal Blog</Text>
          <Text style={styles.description}>
            {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio porro pariatur fugit nesciunt, quae blanditiis commodi.'}
          </Text>
        </View>

      </View>
    );
  }
}
