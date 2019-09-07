// @flow
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import fonts from "../../design_system/styles/fonts";
import colors from "../../design_system/styles/colors";
import LocationRequestContainer from "./components/LocationRequests/LocationRequestContainer";
import AppHeaderContainer from "../AppHeaderContainer";
import ActiveLocationsContainer from "./components/ActiveLocations/ActiveLocationsContainer";
import SwipeDownView from "../../design_system/SwipeDownView/SwipeDownView";

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
      <View style={styles.swipeDownView}>
        <SwipeDownView
          downHeight={50}
          upHeight={500}
          backgroundColor={colors.ORANGE.CF_WHITE_PEACH}>
          <ActiveLocationsContainer />
        </SwipeDownView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
    backgroundColor: colors.WHITE,
  },
  locationRequests: {
    marginLeft: 40,
  },
  header: {
    fontFamily: fonts.ROBOTO.BOLD,
    fontSize: fonts.SIZE.FONT_SIZE_H2,
    color: colors.ORANGE.CF_SUN,
  },
  swipeDownView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

HomeScreen.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
