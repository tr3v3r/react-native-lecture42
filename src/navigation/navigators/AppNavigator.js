
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';


import AddPostNavigator from './AddPostNavigator';
import AddDescriptionScreen from '../../screens/AddDescriptionScreen';
import MainTabNavigator from './MainTabNavigator';

const AppNavigator = createStackNavigator({
  'mainTabNavigator': {
    screen: MainTabNavigator,
    navigationOptions: {
      header: null,
    },
  },

  'addDescriptionScreen': AddDescriptionScreen,

  'addPostNavigator': {
    screen: AddPostNavigator,
  },
}, {
  initialRouteName: 'mainTabNavigator',
  mode: 'modal',
});

export default createAppContainer(AppNavigator);
