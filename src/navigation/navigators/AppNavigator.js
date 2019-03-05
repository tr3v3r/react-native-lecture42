import React from 'react';

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import { TouchableOpacity, Text, View } from 'react-native';

import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeStackNavigator from './HomeStackNavigator';
import AddPostNavigator from './AddPostNavigator';

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
  'Search': View,
  'Add': {
    screen: View,
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => {
        navigation.navigate('addPostNavigator');
      },
    },

  },
  'Favourite': View,
  'Profile': View,
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

const AppNavigator = createStackNavigator({
  'appTabNavigator': {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    },
  },

  'addDescriptionScreen': {
    screen: View,
    navigationOptions: ({ navigation }) => {
      function onSharePress() {
        navigation.navigate('HomeNavigator');
      }

      return {
        title: 'New Post',
        headerForceInset: { top: 'never' },
        headerTintColor: '#34393d',
        headerRight: (
          <TouchableOpacity style={{ marginRight: 10 }} onPress={onSharePress}>
            <Text>Share</Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          height: 40,
        },
      };
    },
  },

  'addPostNavigator': {
    screen: AddPostNavigator,
    navigationOptions: ({ navigation }) => {
      const currentIndex = navigation.state.index;
      const currentRouteName = navigation.state.routes[currentIndex].routeName;
      function onNextPress() {
        navigation.navigate('addDescriptionScreen');
      }

      return {
        title: currentRouteName,
        headerBackTitle: null,
        headerForceInset: { top: 'never' },
        headerLeft: ({ onPress }) => (
          <TouchableOpacity style={{ marginLeft: 10 }} onPress={onPress}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        ),
        headerRight: currentIndex === 0 && (
          <TouchableOpacity style={{ marginRight: 10 }} onPress={onNextPress}>
            <Text>Next</Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          height: 40,
        },
      };
    },


  },
}, {
  initialRouteName: 'appTabNavigator',
  mode: 'modal',
});

export default createAppContainer(AppNavigator);
