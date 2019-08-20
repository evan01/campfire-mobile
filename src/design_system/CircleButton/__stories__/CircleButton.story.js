// @flow
import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";
import CircleButton from "../CircleButton";
import colors from "../../styles/colors";

const styles = StyleSheet.flatten({
  padding: 30,
  width: "100%",
  height: "100%",
  backgroundColor: colors.BLUE.CF_NIGHT,
});

storiesOf("CircleButton", module)
  .add("Default circle button", () => (
    <View style={styles}>
      <CircleButton
        icon={"cake"}
        size={30}
        backgroundColor={"white"}
        iconColor={"red"}
        onPress={() => console.log("pressed")}
      />
    </View>
  ))
  .add("Circle Button with flight icon", () => (
    <View style={styles}>
      <CircleButton
        icon={"flight"}
        size={60}
        backgroundColor={"red"}
        iconColor={"white"}
        onPress={() => console.log("pressed")}
      />
    </View>
  ));
