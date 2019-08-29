// @flow
import React, { useEffect } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import PropTypes from "prop-types";
import _ from "lodash";
import { connect } from "react-redux";
import LocationRequest from "./LocationRequest";
import { useDropDown } from "../../../design_system/Animations/DropDown";
import {
  getLocationRequests,
  acceptLocationRequest,
  rejectLocationRequest,
} from "../../../redux/reducers/locations/locations.actions";

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
  locationRequests: state.locations.requests,
  numLocationRequests: state.locations.numRequests,
  account: state.account,
});

const mapDispatchToProps = {
  getLocationRequests: getLocationRequests,
  acceptLocationRequest: acceptLocationRequest,
  rejectLocationRequest: rejectLocationRequest,
};

const LocationRequestContainer = (props) => {
  const locationRequestDrop = useDropDown(50, 750);
  const { locationRequests, getLocationRequests } = props;

  useEffect(() => {
    getLocationRequests();
  }, []);

  const renderLocationRequests = () => {
    const requests = _.map(locationRequests, (user) => {
      return (
        <Animated.View
          style={[styles.locationRequests, { height: locationRequestDrop }]}
          key={user.name}>
          <LocationRequest
            user={user.name}
            userId={user.userId}
            onConfirm={props.acceptLocationRequest}
            onCancel={props.rejectLocationRequest}
          />
        </Animated.View>
      );
    });

    return (
      <View>
        <Text style={styles.header}>Requests</Text>
        <View style={styles.requests}>{requests}</View>
      </View>
    );
  };
  return <View style={styles.container}>{renderLocationRequests()}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});

LocationRequestContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationRequestContainer);
