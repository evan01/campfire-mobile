// @flow
import React, { useEffect, useState } from "react";
import { Text, Button, StyleSheet, View, Animated } from "react-native";
import PropTypes from "prop-types";
import _ from "lodash";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import AppHeader from "../../design_system/AppHeader/AppHeader";
import fonts from "../../design_system/styles/fonts";
import colors from "../../design_system/styles/colors";
import LocationRequestContainer from "./components/LocationRequestContainer";
import AppHeaderContainer from "../AppHeaderContainer";

const propTypes = {
  navigation: PropTypes.object,
  numLocationRequests: PropTypes.number,
  locationRequests: PropTypes.array,
  account: PropTypes.object,
  getLocationRequests: PropTypes.func,
  acceptLocationRequest: PropTypes.func,
  rejectLocationRequest: PropTypes.func,
};

const mapStateToProps = (state) => ({
  account: state.account,
});

const mapDispatchToProps = {};

const HomeScreen = (props) => {
  const { navigation, numLocationRequests } = props;

  return (
    <SafeAreaView style={styles.background}>
      <AppHeaderContainer />
      <LocationRequestContainer />
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
  background: {
    height: "100%",
  },
  locationRequests: {
    marginLeft: 40,
  },
  header: {
    fontFamily: fonts.ROBOTO.BOLD,
    fontSize: fonts.SIZE.FONT_SIZE_H2,
    color: colors.ORANGE.CF_SUN,
  },
});

HomeScreen.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
