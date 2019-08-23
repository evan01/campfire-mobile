// @flow
import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import PropTypes from "prop-types";
import profile1 from "../../assets/images/profilePictures/Profile1.png";
import profile2 from "../../assets/images/profilePictures/Profile2.png";
import profile3 from "../../assets/images/profilePictures/Profile3.png";
import profile4 from "../../assets/images/profilePictures/Profile4.png";
import profile5 from "../../assets/images/profilePictures/Profile5.png";
import profile6 from "../../assets/images/profilePictures/Profile6.png";
import profile7 from "../../assets/images/profilePictures/Profile7.png";
import profile8 from "../../assets/images/profilePictures/Profile8.png";

export const PROFILES = [
  "profile1",
  "profile2",
  "profile3",
  "profile4",
  "profile5",
  "profile6",
  "profile7",
  "profile8",
];

const propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  borderColor: PropTypes.string,
  notifications: PropTypes.number,
  onPress: PropTypes.func,
};

const CircleProfile = (props) => {
  const getNotificationsStyle = () => ({
    borderRadius: props.size / 3,
    width: props.size / 1.5,
    borderColor: colors.WHITE,
    height: props.size / 1.5,
    backgroundColor: colors.ORANGE.CF_FIRE,
    alignItems: "center",
    justifyContent: "center",
    top: -props.size / 1.8,
    left: (2 * props.size) / 3.5,
  });

  const getCircularContainerStyles = () => ({
    borderRadius: props.size / 2,
    width: props.size,
    height: props.size,
    borderColor: props.borderColor,
    borderWidth: 2,
  });

  const renderNotifications = () => {
    if (!props.notifications || props.notifications < 1) {
      return null;
    }
    return (
      <View style={getNotificationsStyle()}>
        <Animated.Text style={[styles.notificationText]}>
          {props.notifications}
        </Animated.Text>
      </View>
    );
  };

  const getProfileImage = () => {
    switch (props.name) {
      case "profile1":
        return profile1;
      case "profile2":
        return profile2;
      case "profile3":
        return profile3;
      case "profile4":
        return profile4;
      case "profile5":
        return profile5;
      case "profile6":
        return profile6;
      case "profile7":
        return profile7;
      case "profile8":
        return profile8;
      default:
        return profile1;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          style={getCircularContainerStyles()}
          source={getProfileImage()}
        />
      </TouchableOpacity>
      {renderNotifications()}
    </View>
  );
};

const styles = StyleSheet.create({
  notificationText: {
    color: colors.WHITE,
    fontFamily: fonts.ROBOTO.LIGHT,
  },
  container: {
    margin: 8,
  },
});

CircleProfile.propTypes = propTypes;
export default CircleProfile;
