// @flow
import React from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import CircleProfile from "../CircleProfile/CircleProfile";
import colors from "../styles/colors";
import CfLogo from "../CfLogo/CfLogo";

const propTypes = {
  profileImage: PropTypes.string,
  numNotifications: PropTypes.number,
  navigation: PropTypes.object,
};

const AppHeader = ({ profileImage, numNotifications, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <CircleProfile
          name={profileImage}
          size={40}
          borderColor={colors.WHITE}
          notifications={numNotifications}
          onPress={() => navigation.navigate("profile")}
        />
      </View>
      <View style={styles.logoContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("home")}
          style={styles.logo}>
          <CfLogo />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 80,
    width: "100%",
  },
  profileContainer: {},
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 50,
    top: -80,
  },
  logo: {},
});

AppHeader.propTypes = propTypes;
export default AppHeader;
