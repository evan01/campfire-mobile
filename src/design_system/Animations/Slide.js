// @flow
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

//Custom hook for reactnative animated value
export const useSlide = (slideValue = 20, duration = 1000) => {
  const slide = useRef(new Animated.Value(0)).current;
  const slideOver = () => {
    Animated.timing(slide, { toValue: slideValue, duration: duration }).start(
      () => slideOver()
    );
  };

  useEffect(() => {
    slideOver();
  }, []);
  return slide;
};
