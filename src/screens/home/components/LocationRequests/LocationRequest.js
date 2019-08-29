// @flow
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import fonts from "../../../design_system/styles/fonts";
import colors from "../../../design_system/styles/colors";
import CircleButton from "../../../design_system/CircleButton/CircleButton";
import CircleProfile from "../../../design_system/CircleProfile/CircleProfile";

const propTypes = {
  user: PropTypes.string,
  userId: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

const buttonSection = (onConfirm, onCancel) => (
  <View style={styles.buttonSection}>
    <View style={styles.buttonContainer}>
      <CircleButton
        icon={"check"}
        size={30}
        backgroundColor={colors.GREEN.CF_GOLF}
        iconColor={"white"}
        onPress={onConfirm}
      />
    </View>
    <View style={styles.buttonContainer}>
      <CircleButton
        icon={"close"}
        size={30}
        backgroundColor={colors.RED.CF_FIRETRUCK}
        iconColor={"white"}
        onPress={onCancel}
      />
    </View>
  </View>
);

const LocationRequest = ({ user, userId, onConfirm, onCancel }) => (
  <View style={styles.container}>
    <CircleProfile
      name={"profile1"}
      size={40}
      onPress={() => console.log("profile_press")}
      borderColor={colors.WHITE}
    />
    <View>
      <Text style={styles.name}>{user}</Text>
    </View>
    {buttonSection(() => onConfirm(userId), () => onCancel(userId))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 6,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontFamily: fonts.ROBOTO.LIGHT,
    fontSize: fonts.SIZE.FONT_SIZE_H2,
    color: colors.ORANGE.CF_GOLD,
  },
  buttonSection: {
    flexDirection: "row",
  },
  buttonContainer: {
    marginHorizontal: 4,
  },
});

LocationRequest.propTypes = propTypes;
export default LocationRequest;
