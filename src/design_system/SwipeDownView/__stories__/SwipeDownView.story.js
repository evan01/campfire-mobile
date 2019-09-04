// @flow
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { storiesOf } from "@storybook/react-native";
import SwipeDownView from "../SwipeDownView";
import colors from "../../styles/colors";

const styles = StyleSheet.flatten({
  padding: 30,
  flex: 1,
  justifyContent: "flex-end",
  flexDirection: "column",
  backgroundColor: colors.BLUE.CF_NIGHT,
});

const contentStyles = StyleSheet.create({
  body: {
    backgroundColor: "orange",
    flex: 1,
  },
  header: {
    backgroundColor: "red",
  },
});

const header = (
  <View style={contentStyles.header}>
    <Text>Header</Text>
  </View>
);
const body = (
  <View style={contentStyles.body}>
    <Text>body</Text>
  </View>
);

storiesOf("SwipeDownView", module)
  .add("Custom Header", () => (
    <View style={styles}>
      <SwipeDownView
        onSwipe={(dir, state) => {
          console.log(dir);
          console.log(state);
        }}
        header={header}
        backgroundColor={colors.ORANGE.CF_WHITE_PEACH}>
        {body}
      </SwipeDownView>
    </View>
  ))
  .add("Default Header", () => (
    <View style={styles}>
      <SwipeDownView
        onSwipe={(dir, state) => {
          console.log(dir);
          console.log(state);
        }}
        backgroundColor={colors.ORANGE.CF_WHITE_PEACH}>
        {body}
      </SwipeDownView>
    </View>
  ));
