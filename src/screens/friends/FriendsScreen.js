// @flow
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, Animated } from "react-native";
import _ from "lodash";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFriends } from "../../redux/reducers/friends/friends.action";
import FriendsList from "./components/FriendsList";
import colors from "../../design_system/styles/colors";
import fonts from "../../design_system/styles/fonts";
import { useDropDown } from "../../design_system/Animations/DropDown";
import AppHeader from "../../design_system/AppHeader/AppHeader";
import { SafeAreaView } from "react-navigation";
import AppIcon from "../../design_system/AppIcon/AppIcon";

const propTypes = {
  navigation: PropTypes.object,
  getFriends: PropTypes.func,
  friends: PropTypes.object,
};

const mapStateToProps = (state) => ({
  friends: state.friends.friends,
});

const mapDispatchToProps = {
  getFriends: getFriends,
};

const NavigationScreen = (props) => {
  const sampleAnimationValue = useDropDown(200, 2000);
  // const sampleAnimationValue = 50;

  useEffect(() => {
    //Efficient api call for user location (N/W/ HEADING)

    //Get the friends list
    props.getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderFriendsTitle = () => (
    <View style={styles.friendsTitleGroup}>
      <AppIcon name={"group"} color={colors.ORANGE.CF_SUN} size={40} />
      <Text style={styles.title}>Friends</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        profileImage={"profile1"}
        onProfilePress={() => {}}
        numNotifications={3}
        navigation={props.navigation}
      />
      {renderFriendsTitle()}
      <FriendsList friends={props.friends} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  friendsTitleGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: fonts.SIZE.FONT_SIZE_H1,
    fontFamily: fonts.ROBOTO.BOLD,
    color: colors.ORANGE.CF_SUN,
    marginLeft: 10,
  },
});

NavigationScreen.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationScreen);
