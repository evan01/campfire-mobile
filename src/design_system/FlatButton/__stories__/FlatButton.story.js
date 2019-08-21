// @flow
import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";
import FlatButton from "../FlatButton";
import colors from "../../styles/colors";

const styles = StyleSheet.flatten({
  padding: 30,
  width: "100%",
  height: "100%",
  backgroundColor: colors.BLUE.CF_NIGHT,
});

storiesOf("FlatButton", module).add("default flat button", () => (
  <View style={styles}>
    <FlatButton
      text={"Press Here"}
      onPress={() => {}}
      backgroundColor={"red"}
    />
  </View>
));
