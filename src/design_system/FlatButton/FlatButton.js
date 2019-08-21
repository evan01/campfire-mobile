// @flow
import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import PropTypes from "prop-types";

const propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
};

const FlatButton = (props) => (
  <View style={[styles.buttonContainer]}>
    <TouchableHighlight
      style={[styles.button, { backgroundColor: props.backgroundColor }]}
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableHighlight>
  </View>
);

FlatButton.displayName = "TextInput";

const styles = StyleSheet.create({
  buttonContainer: {
    maxWidth: 250,
    flexDirection: "row",
  },
  buttonText: {
    fontFamily: fonts.ROBOTO.LIGHT,
    fontSize: fonts.SIZE.FONT_SIZE_H3,
    color: colors.WHITE,
  },
  button: {
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

FlatButton.propTypes = propTypes;
export default FlatButton;
