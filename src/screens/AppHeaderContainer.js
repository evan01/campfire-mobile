// @flow
import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppHeader from "../design_system/AppHeader/AppHeader";
import { withNavigation } from "react-navigation";

const propTypes = {
  navigation: PropTypes.object,
  account: PropTypes.object,
};

const mapStateToProps = (state) => ({
  numLocationRequests: state.locations.numRequests,
  account: state.account,
});

const mapDispatchToProps = {};

const AppHeaderContainer = (props) => {
  const { numLocationRequests, navigation, account } = props;
  return (
    <AppHeader
      profileImage={"profile1"}
      numNotifications={numLocationRequests}
      navigation={navigation}
    />
  );
};

AppHeaderContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(AppHeaderContainer));
