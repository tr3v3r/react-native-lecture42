import React from 'react';

import {
  createBottomTabNavigator,
} from 'react-navigation';

import { TouchableOpacity, Text, View } from 'react-native';
import TakePhotoScreen from '../../screens/TakePhotoScreen';
import ChooseFromLibraryScreen from '../../screens/ChooseFromLibraryScreen';

// import { View } from 'react-native';

// const AddPostNavigator = createBottomTabNavigator({
//   'Library': View,
//   'Photo': View,
// })
// export default AddPostNavigator;


const AddPostNavigator = createBottomTabNavigator({
  'Library': ChooseFromLibraryScreen,
  'Photo': TakePhotoScreen,
}, {
  tabBarOptions: {
    showIcon: false,
    activeTintColor: '#34393d',
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


// headerLeft: () => (
//   <TouchableOpacity style={{ marginLeft: 10 }}>
//     <Text>Cancel</Text>
//   </TouchableOpacity>
// ),
// headerRight: (
//   <TouchableOpacity style={{ marginRight: 10 }}>
//     <Text>Next</Text>
//   </TouchableOpacity>
// ),


export default AddPostNavigator;
