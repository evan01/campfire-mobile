// @flow
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
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
      <CircleProfile
        name={profileImage}
        size={50}
        borderColor={colors.WHITE}
        notifications={numNotifications}
        onPress={() => navigation.navigate("profile")}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("home")}
        style={styles.logo}>
        <CfLogo />
      </TouchableOpacity>
      <View style={styles.extraView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 4,
  },
  extraView: {
    width: 40,
  },
});

AppHeader.propTypes = propTypes;
export default AppHeader;
