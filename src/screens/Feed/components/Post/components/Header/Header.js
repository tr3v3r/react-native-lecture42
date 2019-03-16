import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
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


class Header extends Component {
  navigateToUserDetails = () => {
    this.props.navigation.navigate('userDetails');
  }

  render() {
    const { name, location } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.navigateToUserDetails} style={styles.userContainer}>
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

export default withNavigation(Header);
