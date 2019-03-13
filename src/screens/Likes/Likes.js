import React, { Component } from 'react';
import {
  Button, Animated, LayoutAnimation, UIManager, Easing, Image, View,
} from 'react-native';
// import LottieView from 'lottie-react-native';
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
  image: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 0,
    right: -250,
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
    Animated.sequence([
      Animated.timing(this.animatedValue, {
        duration: 2000,
        toValue: 0.6,
        easing: Easing.quad,
      }),
      Animated.delay(1000),
      Animated.spring(this.animatedValue, {
        toValue: 1,
        easing: Easing.quad,
      }),
      Animated.timing(this.animatedValue, {
        duration: 200,
        toValue: 0,
        easing: Easing.quad,
      }),
    ]).start();
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

    // return (
    //   <LottieView
    //     source={require('./4906-lady-guitar-player.json')}
    //     autoPlay
    //     loop
    //   />
    // );

    const traslateX2 = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -250],
      extrapolateLeft: 'clamp',
    });

    return (
      <View>
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
        <Animated.Image
          source={require('../../assets/cat.png')}
          style={[styles.image, { transform: [{ translateX: traslateX2 }] }]}
        />
      </View>

    );
  }
}
