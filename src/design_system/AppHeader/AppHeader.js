// @flow
import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import PropTypes from "prop-types";
import CircleProfile from "../CircleProfile/CircleProfile";
import colors from "../styles/colors";
import CfLogo from "../CfLogo/CfLogo";
import { usePulse } from "../../design_system/Animations/Pulse";

const propTypes = {
  profileImage: PropTypes.string,
  onProfilePress: PropTypes.func,
  numNotifications: PropTypes.number,
};

const AppHeader = ({ profileImage, onProfilePress, numNotifications }) => {
  return (
    <View>
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
};

const styles = StyleSheet.create({
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
