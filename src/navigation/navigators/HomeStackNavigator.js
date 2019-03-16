import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {
  createStackNavigator,
} from 'react-navigation';

import Feed from '../../screens/Feed';
import Profile from '../../screens/Profile';


const RightIcon = (
  <View style={{
    flexDirection: 'row',
  }}
  >
    <TouchableOpacity
      style={{
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: '#f48f42',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 2,
        marginRight: 10,
      }}
    >
      <Feather
        name="tv"
        color="#fff"
        size={15}
      />
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons
        name="md-paper-plane"
        color="#000"
        size={26}
      />
    </TouchableOpacity>
  </View>
);

const HomeStackNavigator = createStackNavigator({
  'Home': {
    screen: Feed,
    navigationOptions: {
      headerLeftContainerStyle: {
        marginLeft: 10,
      },

      headerLeft: (
        <TouchableOpacity>
          <EvilIcons
            name="camera"
            color="#000"
            size={26}
          />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        marginRight: 10,
      },
      headerRight: RightIcon,
      headerTitleContainerStyle: {
        justifyContent: 'center',
      },
      headerTitle: <Image
        style={{
          height: 30, width: 100,
        }}
        resizeMode="contain"
        source={require('../../assets/logo.png')}
      />,
    },
  },
  userDetails: Profile,
}, {

});


export default HomeStackNavigator;
