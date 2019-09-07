// @flow
import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";
import HalfModal from "../HalfModal";
import colors from "../../styles/colors";

const styles = StyleSheet.flatten({
  padding: 30,
  width: "100%",
  height: "100%",
  backgroundColor: colors.BLUE.CF_NIGHT,
});

storiesOf("HalfModal", module).add("default", () => (
  <View style={styles}>
    <HalfModal />
  </View>
));
