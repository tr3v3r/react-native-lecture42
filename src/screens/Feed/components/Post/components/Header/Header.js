import React, { Component } from 'react';
import {
  TouchableOpacity, View, Image, Text, StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const avatar = require('../../../../../../assets/avatar_placeholder.png');


const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  userContainer: {
    flexDirection: 'row',
  },
  avatarImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  textContainer: {
    marginLeft: 8,
  },
  dotsIcon: {
    fontSize: 30,
  },

});


export default class Header extends Component {
  render() {
    const { name, location } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.userContainer}>
          <Image
            style={styles.avatarImage}
            source={avatar}
          />
          <View style={styles.textContainer}>
            <Text>{name}</Text>
            <Text>{location}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="more-horizontal"
            style={styles.dotsIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
