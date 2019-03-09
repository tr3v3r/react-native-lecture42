import {
  createBottomTabNavigator,
} from 'react-navigation';


import TakePhotoScreen from '../../screens/TakePhotoScreen';
import ChooseFromLibraryScreen from '../../screens/ChooseFromLibraryScreen';


const TabNavigator = createBottomTabNavigator({
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


export default TabNavigator;
