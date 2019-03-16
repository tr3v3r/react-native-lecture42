import React from 'react';

import {
  createBottomTabNavigator,
} from 'react-navigation';

import { TouchableOpacity, Text, View } from 'react-native';
import TakePhotoScreen from '../../screens/TakePhotoScreen';
import ChooseFromLibraryScreen from '../../screens/ChooseFromLibraryScreen';


const AddPostNavigator = createBottomTabNavigator({
  'Library': ChooseFromLibraryScreen,
  'Photo': TakePhotoScreen,
}, {
  tabBarOptions: {
    activeTintColor: '#34393d',
    showIcon: false,
    tabStyle: {
      justifyContent: 'center',
    },
    labelStyle: {
      fontSize: 15,
    },
    style: {
      height: 40,
      borderTopWidth: 0,
      elevation: 0,
    },
  },
  defaultNavigationOptions: {
    tabBarIcon: () => null,
  },
});

AddPostNavigator.navigationOptions = ({ navigation }) => {
  const currentIndex = navigation.state.index;
  const currentRouteName = navigation.state.routes[currentIndex].routeName;
  const navigateToAddDescriptionScreen = navigation.getParam('navigateToAddDescriptionScreen');

  return {
    title: currentRouteName,
    headerBackTitle: null,
    headerForceInset: { top: 'never' },
    headerTitleContainerStyle: {
      justifyContent: 'center',
    },
    headerLeft: ({ onPress }) => (
      <TouchableOpacity style={{ marginLeft: 10 }} onPress={onPress}>
        <Text>Cancel</Text>
      </TouchableOpacity>
    ),
    headerRight: currentIndex === 0 ? (
      <TouchableOpacity style={{ marginRight: 10 }} onPress={navigateToAddDescriptionScreen}>
        <Text>Next</Text>
      </TouchableOpacity>
    )
      : (<View />),
    headerStyle: {
      height: 40,
    },
  };
};


export default AddPostNavigator;
