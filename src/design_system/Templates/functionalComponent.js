// @flow
import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const propTypes = {};

const HalfModal = (props) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 10,
    width: "100%",
  },
});

HalfModal.propTypes = propTypes;
export default HalfModal;
