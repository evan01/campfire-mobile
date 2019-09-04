// @flow
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

const propTypes = {
  navigation: PropTypes.object,
};

const mapStateToProps = (state) => ({
  numLocationRequests: state.locations.numRequests,
});

const mapDispatchToProps = {};

const ActiveLocationsContainer = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});

ActiveLocationsContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(ActiveLocationsContainer));
