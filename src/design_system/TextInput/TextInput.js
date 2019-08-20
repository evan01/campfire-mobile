// @flow
import React from "react";
import { TextInput, StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const DefaultTextInput = (props) => <TextInput {...props} style={styles} />;

DefaultTextInput.displayName = "TextInput";

const styles = StyleSheet.flatten({
  height: 50,
  backgroundColor: colors.WHITE,
  borderColor: colors.BLACK,
  borderRadius: 25,
  marginLeft: 15,
  fontFamily: fonts.ROBOTO.THIN,
  fontSize: fonts.SIZE.FONT_SIZE_H2,
  paddingLeft: 20,
  padding: 14,
});
export default DefaultTextInput;
