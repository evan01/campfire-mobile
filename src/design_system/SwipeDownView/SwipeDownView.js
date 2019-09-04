// @flow
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated, Text } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import PropTypes from "prop-types";

const propTypes = {
  header: PropTypes.object,
  backgroundColor: PropTypes.string,
  onSwipe: PropTypes.func,
};

const SwipeDownView = (props) => {
  const viewHeight = new Animated.Value(90);

  const onSwipeUp = () => {
    Animated.spring(viewHeight, { toValue: 500, friction: 5 }).start();
  };

  const onSwipeDown = () => {
    Animated.spring(viewHeight, { toValue: 90, friction: 5 }).start();
  };

  const animatedContainerStyle = {
    height: viewHeight,
    backgroundColor: props.backgroundColor,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  };

  const defaultHeader = () => (
    <View style={styles.headerSpaceContainer}>
      <View style={styles.headerSpace} />
    </View>
  );

  return (
    <Animated.View style={[styles, animatedContainerStyle]}>
      <GestureRecognizer
        style={styles.gestureContainer}
        config={{
          velocityThreshold: 0.3,
          directionalOffsetThreshold: 80,
        }}
        onSwipe={(dir, state) => props.onSwipe(dir, state)}
        onSwipeDown={(dir, state) => onSwipeDown(state)}
        onSwipeUp={({ state }) => onSwipeUp(state)}>
        {props.header ? props.header : defaultHeader()}
        {props.children}
      </GestureRecognizer>
    </Animated.View>
  );
};

SwipeDownView.displayName = "TextInput";

const styles = StyleSheet.create({
  gestureContainer: {
    flex: 1,
  },
  headerSpace: {
    backgroundColor: colors.BLUE.CF_MOON,
    width: 50,
    height: 4,
  },
  headerSpaceContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

SwipeDownView.propTypes = propTypes;
export default SwipeDownView;
