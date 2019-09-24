// @flow
import React from "react";
import { View, StyleSheet, But } from "react-native";
import PropTypes from "prop-types";
import StorybookUIRoot from "../../../storybook";
import AppHeaderContainer from "../AppHeaderContainer";
// import AppHeaderContainer

const propTypes = {
  navigation: PropTypes.object,
};

const StorybookContainer = () => {
  return (
    <View style={styles.container}>
      <AppHeaderContainer />
      <StorybookUIRoot style={styles.StorybookContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingTop: 20,
  },
  StorybookContainer: {
    height: "80%",
  },
});

StorybookContainer.propTypes = propTypes;
export default StorybookContainer;
