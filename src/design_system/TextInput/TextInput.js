// @flow
import React from "react";
import { TextInput, StyleSheet } from "react-native";
import colors from "../styles/colors";

const DefaultTextInput = (props) => <TextInput {...props} style={styles} />;

DefaultTextInput.displayName = "TextInput";

const styles = StyleSheet.flatten({
  height: 50,
  backgroundColor: colors.WHITE,
  borderColor: colors.BLACK,
  borderRadius: 25,
  marginLeft: 15,
});
export default DefaultTextInput;
