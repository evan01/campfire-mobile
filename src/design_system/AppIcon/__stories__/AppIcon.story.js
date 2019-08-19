// @flow
import React from "react";
import { storiesOf } from "@storybook/react-native";
import _ from "lodash";
import { View, Text, FlatList } from "react-native";
import AppIcon from "../AppIcon";
import icons from "./material_icons.json";

storiesOf("AppIcon", module).add("default", () => {
  const iconNames = _.keys(icons);
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={iconNames}
      renderItem={({ item }) => (
        <View key={item}>
          <Text>{item}</Text>
          <AppIcon name={item} />
        </View>
      )}
    />
  );
});
