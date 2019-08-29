// @flow
import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const propTypes = {};

const LocationRequestArea = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});

LocationRequestArea.propTypes = propTypes;
export default LocationRequestArea;
