import React, { Component } from 'react';
import {
  Button, Animated, LayoutAnimation, UIManager, Easing,
} from 'react-native';
import { ListItem } from 'react-native-elements';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true); // eslint-disable-line

const styles = {
  contentContainer: {
    height: 1200,
    padding: 10,
  },
  text: {
    fontSize: 30,
  },
};
export default class Likes extends Component {
  constructor(props) {
    super(props);
    this.scrollValue = props.navigation.getParam('scrollValue');
    this.animatedValue = new Animated.Value(0);
    this.state = {
      headlineHeight: 0,
      data: [
        'Neo',
        'Trinity',
      ],
    };
  }

  addLike = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState(prevState => ({
      data: [...prevState.data, 'Piphia'],
    }));

    this.animateHeadline();
  }

  animateHeadline = () => {
    Animated.timing(this.animatedValue, {
      duration: 200,
      toValue: 1,
      easing: Easing.quad,
    }).start();
  }

  renderItems() {
    return this.state.data.map(name => (
      <ListItem
        title={`${name} likes your post`}
        leftAvatar={require('../../assets/avatar_placeholder.png')}
        chevron
      />
    ));
  }

  onLayout = ({ nativeEvent }) => {
    this.setState({ headlineHeight: 10 + nativeEvent.layout.height });
    this.props.navigation.setParams({ headlineHeight: 10 + nativeEvent.layout.height });
  }

  render() {
    const translateX = this.scrollValue.interpolate({
      inputRange: [0, this.state.headlineHeight],
      outputRange: [0, 100],
      extrapolateLeft: 'clamp',
    });


    return (
      <Animated.ScrollView
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [
            { nativeEvent: { contentOffset: { y: this.scrollValue } } },
          ],
          {
            useNativeDriver: true,
          },
        )}
        contentContainerStyle={styles.contentContainer}
      >
        <Animated.Text onLayout={this.onLayout} style={[styles.text, { transform: [{ translateX }] }]}>Likes</Animated.Text>
        {this.renderItems()}
        <Button onPress={this.addLike} title="Add more" />
      </Animated.ScrollView>
    );
  }
}
