import React from 'react';

import {
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Feed from '../../screens/Feed';
import TakePhotoScreen from '../../screens/TakePhotoScreen';
import ChooseFromLibraryScreen from '../../screens/ChooseFromLibraryScreen';

import HomeStackNavigator from './HomeStackNavigator';

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
  'Favourite': createIcon(Ionicons, 'ios-heart-empty'),
  'Profile': createIcon(AntDesign, 'user'),
};

const TabNavigator = createBottomTabNavigator({
  'HomeNavigator': HomeStackNavigator,
  'Search': Feed,
  'Add': TakePhotoScreen,
  'Favourite': ChooseFromLibraryScreen,
  'Profile': Feed,
}, {
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

export default createAppContainer(TabNavigator);
