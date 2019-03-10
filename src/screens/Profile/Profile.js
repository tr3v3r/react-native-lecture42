import React, { Component } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import UserInfo from './components/UserInfo/UserInfo';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});


export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UserInfo />
      </View>
    );
  }
}
