// @flow
import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";
import TextInput from "../TextInput";
import colors from "../../styles/colors";

const styles = StyleSheet.flatten({
  padding: 30,
  width: "100%",
  height: "100%",
  backgroundColor: colors.BLUE.CF_NIGHT,
});

storiesOf("TextInput", module).add("default text input", () => (
  <View style={styles}>
    <TextInput defaultValue="This is TextBox." maxLength={25} />
  </View>
));
