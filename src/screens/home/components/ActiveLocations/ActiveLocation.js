// @flow
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import CircleProfile from "../../../../design_system/CircleProfile/CircleProfile";
import fonts from "../../../../design_system/styles/fonts";
import colors from "../../../../design_system/styles/colors";
import {
  unixTimeToMoment,
  getTimeDifferenceInEnglish,
  getTimeFromNowToMoment,
} from "../../../../services/dateTimeConverter";
import CircleButton from "../../../../design_system/CircleButton/CircleButton";

const propTypes = {
  user: PropTypes.object,
  location: PropTypes.object,
  onPress: PropTypes.func,
};

const ActiveLocation = (props) => {
  const { user, location, onPress } = props;

  const renderTimeLeft = () => {
    //todo move these both the dateTime file
    const expirationTime = unixTimeToMoment(location.expirationDate);
    const timeLeft = getTimeFromNowToMoment(expirationTime);
    return <Text style={styles.timeLeftText}>{timeLeft.minutes()}m</Text>;
  };

  const renderBestFriendStar = () => (
    <CircleButton
      icon={"star"}
      size={25}
      backgroundColor={colors.ORANGE.CF_GOLD}
      iconColor={colors.WHITE}
    />
  );

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <CircleProfile
          borderColor={colors.BLUE.CF_NIGHT}
          name={user.profilePicture}
          size={40}
          onPress={() => {}}
        />
        <Text style={styles.nameText}>{user.name}</Text>
        <Text style={styles.distanceText}>Distance</Text>
        {user.bestFriend ? renderBestFriendStar() : renderTimeLeft()}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 40,
    marginVertical: 4,
  },
  nameText: {
    fontFamily: fonts.ROBOTO.LIGHT,
    fontSize: fonts.SIZE.FONT_SIZE_H4,
    color: colors.ORANGE.CF_GOLD,
  },
  distanceText: {
    fontFamily: fonts.ROBOTO.LIGHT,
    fontSize: fonts.SIZE.FONT_SIZE_H4,
    color: colors.WHITE,
  },
  timeLeftText: {
    fontFamily: fonts.ROBOTO.BOLD,
    fontSize: fonts.SIZE.FONT_SIZE_H3,
    color: colors.ORANGE.CF_SUN,
  },
});

ActiveLocation.propTypes = propTypes;
export default ActiveLocation;
