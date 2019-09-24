// @flow
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated, Text } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import PropTypes from "prop-types";

const propTypes = {
  header: PropTypes.object,
  backgroundColor: PropTypes.string,
  onSwipe: PropTypes.func,
  downHeight: PropTypes.number,
  upHeight: PropTypes.number,
  show: PropTypes.bool,
};

const SwipeDownView = (props) => {
  const { show } = props;
  const [isUp, setIsUp] = useState(show);
  const viewHeight = new Animated.Value(props.downHeight);
  const viewOpacity = new Animated.Value(0);

  useEffect(() => {
    if (show) {
      onSwipeUp();
    } else {
      onSwipeDown();
    }
  }, [show]);

  const onSwipeUp = () => {
    debugger;
    if (!isUp) {
      Animated.spring(viewHeight, {
        toValue: props.upHeight,
        friction: 5,
      }).start();
      setIsUp(true);
    } else {
      setIsUp(true);
    }
  };

  const onSwipeDown = () => {
    if (isUp) {
      Animated.spring(viewHeight, {
        toValue: props.downHeight,
        friction: 5,
      }).start();
      setIsUp(false);
    } else {
      setIsUp(false);
    }
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
    <Animated.View style={animatedContainerStyle}>
      <GestureRecognizer
        style={styles.gestureContainer}
        config={{
          velocityThreshold: 0.3,
          directionalOffsetThreshold: 80,
        }}
        onSwipe={(dir, state) => props.onSwipe(dir, state)}
        onSwipeDown={(dir, state) => onSwipeDown(state)}
        onSwipeUp={(dir, state) => onSwipeUp(state)}>
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
    paddingTop: 20,
  },
});

SwipeDownView.defaultProps = {
  onSwipe: () => {},
};
SwipeDownView.propTypes = propTypes;
export default SwipeDownView;
