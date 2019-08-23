// @flow
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, Animated } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { requestFriendsLocation } from "../../redux/reducers/locations/locations.actions";
import ArrowCircle from "../../assets/images/ArrowCircle/ArrowCircle.png";
import colors from "../../design_system/styles/colors";
import fonts from "../../design_system/styles/fonts";
import { useDropDown } from "../../design_system/Animations/DropDown";

const propTypes = {
  navigation: PropTypes.object,
  friendLocation: PropTypes.array,
  friendName: PropTypes.string,
};

const mapStateToProps = (state) => ({
  friendLocation: state.locations.friends[state.locations.active],
  friendName: "Evan", //hardcode until friends in redux
});

const mapDispatchToProps = {
  requestFriendsLocation: requestFriendsLocation,
};

const NavigationScreen = (props) => {
  const { navigation } = props;
  const sampleAnimationValue = useDropDown(280, 3000);
  // const sampleAnimationValue = 50;

  useEffect(() => {
    //Efficient api call for user location (N/W/ HEADING)

    //Request friends location
    props.requestFriendsLocation("sample_friend_id");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const RotateData = sampleAnimationValue.interpolate({
    inputRange: [0, 280],
    outputRange: ["0deg", "360deg"],
  });

  const renderCircleIcon = () => {
    return (
      <View style={styles.navCircleContainer}>
        <Animated.Image
          style={[
            styles.navCircleImage,
            {
              transform: [{ rotate: RotateData }],
            },
          ]}
          source={ArrowCircle}
        />
        <Text style={styles.friendText}>Evan</Text>
        <Text style={styles.friendText}>234m</Text>
      </View>
    );
  };

  const renderAppHeader = () => {
    return null;
  };

  return (
    <View style={styles.container}>
      {renderAppHeader()}
      {renderCircleIcon()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  navCircleContainer: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  navCircleImage: {
    resizeMode: "contain",
    width: "70%",
    height: "70%",
  },
  friendText: {
    color: colors.ORANGE.CF_GOLD,
    fontFamily: fonts.ROBOTO.LIGHT,
    fontSize: fonts.SIZE.LOGO,
  },
  distanceText: {
    color: colors.ORANGE.CF_GOLD,
    fontFamily: fonts.ROBOTO.LIGHT,
    fontSize: 60,
  },
});

NavigationScreen.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationScreen);
