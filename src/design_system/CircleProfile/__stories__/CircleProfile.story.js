// @flow
import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";
import CircleProfile from "../CircleProfile";
import colors from "../../styles/colors";

const styles = StyleSheet.flatten({
  padding: 30,
  width: "100%",
  height: "100%",
  backgroundColor: colors.BLUE.CF_NIGHT,
});

storiesOf("CircleProfile", module)
  .add("Default circle profile", () => (
    <View style={styles}>
      <CircleProfile
        name={"name"}
        size={60}
        borderColor={colors.WHITE}
        onPress={() => console.log("pressed")}
      />
    </View>
  ))
  .add("Circle profile with notifications", () => (
    <View style={styles}>
      <CircleProfile
        name={"name"}
        size={60}
        borderColor={colors.WHITE}
        onPress={() => console.log("pressed")}
        notifications={2}
      />
    </View>
  ))
  .add("Circle profile with different sizes", () => (
    <View style={styles}>
      <CircleProfile
        name={"name"}
        size={120}
        borderColor={colors.WHITE}
        onPress={() => console.log("pressed")}
        notifications={4}
      />
    </View>
  ));
