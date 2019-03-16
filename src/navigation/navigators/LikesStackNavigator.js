import React from 'react';
import { Animated } from 'react-native';


import {
  createStackNavigator,
} from 'react-navigation';

import Likes from '../../screens/Likes';
import Draggable from '../../screens/Draggable';


function TitleComponent({ scrollValue, headlineHeight }) {
  const opacity = scrollValue.interpolate({
    inputRange: [0, headlineHeight - 10, headlineHeight],
    outputRange: [0, 0, 1],
  });

  return (
    <Animated.Text style={[{ fontSize: 20 }, { opacity }]}>Likes</Animated.Text>
  );
}

const LikesStackNavigator = createStackNavigator({
  'likes': {
    screen: Likes,
    navigationOptions: ({ navigation }) => {
      const scrollValue = navigation.getParam('scrollValue');
      const headlineHeight = navigation.getParam('headlineHeight') || 10;

      return {
        headerTitleContainerStyle: {
          justifyContent: 'center',
        },
        headerTitle: <TitleComponent headlineHeight={headlineHeight} scrollValue={scrollValue} />,
      };
    },
    params: {
      scrollValue: new Animated.Value(0),
    },
  },
  'draggable': Draggable,
}, {

});


export default LikesStackNavigator;
