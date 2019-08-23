// @flow
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

//Custom hook for reactnative animated value
export const usePulse = (pulseEnd = 1, pulseStart = 0, duration = 1000) => {
  const pulse = useRef(new Animated.Value(pulseStart)).current;
  const pulseAnimation = () => {
    Animated.sequence([
      Animated.timing(pulse, {
        toValue: pulseEnd,
        duration: duration,
        useNativeDriver: true,
      }),
      Animated.timing(pulse, {
        toValue: pulseStart,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start(() => pulseAnimation());
  };

  useEffect(() => {
    setTimeout(() => pulseAnimation(), 1200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return pulse;
};
