// @flow
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Animated } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import fonts from "../../design_system/styles/fonts";
import colors from "../../design_system/styles/colors";
import LocationRequestContainer from "./components/LocationRequests/LocationRequestContainer";
import AppHeaderContainer from "../AppHeaderContainer";
import ActiveLocationsContainer from "./components/ActiveLocations/ActiveLocationsContainer";
import SwipeDownView from "../../design_system/SwipeDownView/SwipeDownView";
import EmptyState from "./EmptyState/EmptyState";
import CircleButton from "../../design_system/CircleButton/CircleButton";

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
  const [displayFriendsView, setDisplayFriendsView] = useState(false);
  const [displayLocationsView, setDisplayLocationsView] = useState(false);

  const renderEmptyState = () => <EmptyState />;

  const renderBottomTabBar = () => {
    return (
      <View style={styles.bottomTabBarContainer}>
        <CircleButton
          icon={"group"}
          size={50}
          backgroundColor={colors.GREEN.CF_GOLF}
          iconColor={colors.BLUE.CF_MOON}
          onPress={() => setDisplayFriendsView(!displayFriendsView)}
        />
        <CircleButton
          icon={"navigation"}
          size={50}
          backgroundColor={colors.WHITE}
          iconColor={colors.BLUE.CF_MOON}
          onPress={() => setDisplayLocationsView(true)}
        />
      </View>
    );
  };

  const renderHomeContent = () => {
    return <View style={styles.homeContent}>{renderEmptyState()}</View>;
  };

  return (
    <View style={styles.container}>
      <AppHeaderContainer />
      {renderHomeContent()}
      <View style={styles.swipeDownView}>
        <SwipeDownView
          downHeight={0}
          upHeight={500}
          show={displayFriendsView}
          backgroundColor={colors.ORANGE.CF_WHITE_PEACH}>
          <ActiveLocationsContainer />
        </SwipeDownView>
      </View>
      {renderBottomTabBar()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    justifyContent: "space-between",
    height: "100%",
  },
  swipeDownView: {
    width: "100%",
    bottom: 130,
    position: "absolute",
  },
  bottomTabBarContainer: {
    marginHorizontal: 100,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
  },
  homeContent: {},
});

HomeScreen.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
