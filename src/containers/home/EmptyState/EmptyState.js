// @flow
import React from "react";
import { View, StyleSheet, Image, Text, SafeAreaView } from "react-native";
import EmptyStateImage from "../../../assets/images/CampfireLogo/CampfireLogo.png";
import PropTypes from "prop-types";
import fonts from "../../../design_system/styles/fonts";
import colors from "../../../design_system/styles/colors";

const propTypes = {};

const EmptyState = (props) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode={"contain"}
        style={styles.imageContainer}
        source={EmptyStateImage}
      />
      <Text style={styles.fireStartedStyle}>Lets get this fire started!</Text>
      <Text style={styles.addFriendsStyle}>Add some friends.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center",
  },
  imageContainer: {
    width: "70%",
    height: "70%",
  },
  fireStartedStyle: {
    fontFamily: fonts.ROBOTO.LIGHT,
    color: colors.ORANGE.CF_GOLD,
    fontSize: fonts.SIZE.FONT_SIZE_H2,
  },
  addFriendsStyle: {
    fontFamily: fonts.ROBOTO.LIGHT,
    color: colors.RED.CF_FIRETRUCK,
    fontSize: fonts.SIZE.FONT_SIZE_H3,
  },
});

EmptyState.propTypes = propTypes;
export default EmptyState;
