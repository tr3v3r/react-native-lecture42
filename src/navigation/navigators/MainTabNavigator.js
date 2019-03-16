import React from 'react';

import {
  createBottomTabNavigator,
} from 'react-navigation';

import { View } from 'react-native';

import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeStackNavigator from './HomeStackNavigator';
import LikesStackNavigator from './LikesStackNavigator';
import Profile from '../../screens/Profile';

function createIcon(Engine, name) {
  return (nativeProps) => {
    return (
      <Engine
        name={name}
        color={nativeProps.tintColor}
        size={23}
      />
    );
  };
}

const tabIcons = {
  'HomeNavigator': createIcon(Foundation, 'home'),
  'Search': createIcon(Ionicons, 'ios-search'),
  'Add': createIcon(Feather, 'plus-square'),
  'Likes': createIcon(Ionicons, 'ios-heart-empty'),
  'Profile': createIcon(AntDesign, 'user'),
};

const MainTabNavigator = createBottomTabNavigator({
  'HomeNavigator': HomeStackNavigator,
  'Search': View,
  'Add': {
    screen: View,
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => {
        navigation.navigate('addPostNavigator');
      },
    },

  },
  'Likes': LikesStackNavigator,
  'Profile': Profile,
}, {
  initialRouteName: 'HomeNavigator',
  tabBarOptions: {
    activeTintColor: '#34393d',
    showLabel: false,
    style: {
      height: 40,
    },
  },
  defaultNavigationOptions: ({ navigation }) => {
    return {
      tabBarIcon: tabIcons[navigation.state.routeName],
    };
  },
});


export default MainTabNavigator;
