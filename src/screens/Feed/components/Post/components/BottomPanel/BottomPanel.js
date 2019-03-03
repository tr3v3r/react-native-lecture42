import React, { Component } from 'react';
import {
  TouchableOpacity, View, StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 35,
    marginRight: 5,
  },
});


export default class BottomPanel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons
              name="ios-heart-empty"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Feather
              name="message-circle"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Ionicons
              name="md-paper-plane"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.icon}>
          <Feather
            name="bookmark"
            style={[styles.icon, { marginRight: -5 }]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
