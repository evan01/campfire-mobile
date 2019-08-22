// @flow
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

//Custom hook for reactnative animated value
export const useDropDown = (dropValue = 20, duration = 1000) => {
  const drop = useRef(new Animated.Value(0)).current;
  const dropDown = () => {
    Animated.timing(drop, { toValue: dropValue, duration: duration }).start(
      () => dropDown()
    );
  };

  useEffect(() => {
    dropDown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return drop;
};
