// @flow
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

//Custom hook for reactnative animated value
export const useOpacity = (startValue = 0, endValue = 1, duration = 1000) => {
  const opacity = useRef(new Animated.Value(startValue)).current;
  const dropDown = () => {
    Animated.timing(opacity, { toValue: endValue, duration: duration }).start(
      () => dropDown()
    );
  };

  useEffect(() => {
    dropDown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return opacity;
};
