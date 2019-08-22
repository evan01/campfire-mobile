// @flow
import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import CircleProfile from "../CircleProfile/CircleProfile";
import colors from "../styles/colors";
import CfLogo from "../CfLogo/CfLogo";

const propTypes = {
  profileImage: PropTypes.string,
  onProfilePress: PropTypes.func,
  numNotifications: PropTypes.number,
};

const AppHeader = ({ profileImage, onProfilePress, numNotifications }) => (
  <View style={styles.container}>
    <CircleProfile
      name={profileImage}
      size={40}
      borderColor={colors.WHITE}
      notifications={numNotifications}
      onPress={onProfilePress}
    />
    <View style={styles.logo}>
      <CfLogo />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {},
  logo: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
  },
});

AppHeader.propTypes = propTypes;
export default AppHeader;
