// @flow
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, Animated, Button } from "react-native";
import _ from "lodash";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import colors from "../../design_system/styles/colors";
import fonts from "../../design_system/styles/fonts";
import { useDropDown } from "../../design_system/Animations/DropDown";
import AppHeader from "../../design_system/AppHeader/AppHeader";
import { SafeAreaView } from "react-navigation";

const propTypes = {
  navigation: PropTypes.object,
  account: PropTypes.object,
};

const mapStateToProps = (state) => ({
  account: state.account,
});

const mapDispatchToProps = {
  //   getFriends: getFriends,
};

const NavigationScreen = (props) => {
  const { navigation } = props;
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        profileImage={"profile1"}
        onProfilePress={() => {}}
        numNotifications={3}
        navigation={props.navigation}
      />
      <Button
        onPress={() => navigation.navigate("signIn")}
        title={"go to login screen"}
      />
      <Button
        onPress={() => navigation.navigate("storybook")}
        title={"Storybook"}
      />
      <Button
        onPress={() => navigation.navigate("navigation")}
        title={"navigation"}
      />
      <Button
        onPress={() => navigation.navigate("friends")}
        title={"friends"}
      />
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
