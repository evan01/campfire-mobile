// @flow
import React from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import PropTypes from "prop-types";
import profileImage from "../../assets/images/profilePictures/Profile1.png";

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

  const renderNotifications = () => (
    <View style={getNotificationsStyle()}>
      <Text style={[styles.notificationText, { fontSize: props.size / 3 }]}>
        {props.notifications}
      </Text>
    </View>
  );

  return (
    <View>
      <TouchableHighlight onPress={props.onPress}>
        <Image style={getCircularContainerStyles()} source={profileImage} />
      </TouchableHighlight>
      {props.notifications && renderNotifications()}
    </View>
  );
};

CircleProfile.displayName = "TextInput";

const styles = StyleSheet.create({
  notificationText: {
    color: colors.WHITE,
    fontFamily: fonts.ROBOTO.LIGHT,
  },
});

CircleProfile.propTypes = propTypes;
export default CircleProfile;
