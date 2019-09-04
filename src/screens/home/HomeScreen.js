// @flow
import React, { useEffect, useState } from "react";
import { Button, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import fonts from "../../design_system/styles/fonts";
import colors from "../../design_system/styles/colors";
import LocationRequestContainer from "./components/LocationRequests/LocationRequestContainer";
import AppHeaderContainer from "../AppHeaderContainer";
import ActiveLocationsContainer from "./components/ActiveLocations/ActiveLocationsContainer";

const propTypes = {
  navigation: PropTypes.object,
  numLocationRequests: PropTypes.number,
  locationRequests: PropTypes.array,
  account: PropTypes.object,
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
      <ActiveLocationsContainer />
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
