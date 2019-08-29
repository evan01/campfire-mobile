// @flow
import React, { useEffect } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import PropTypes from "prop-types";
import _ from "lodash";
import { connect } from "react-redux";
import LocationRequest from "./LocationRequest";
import { useDropDown } from "../../../design_system/Animations/DropDown";
import { useOpacity } from "../../../design_system/Animations/Opacity";
import {
  getLocationRequests,
  acceptLocationRequest,
  rejectLocationRequest,
} from "../../../redux/reducers/locations/locations.actions";
import AppIcon from "../../../design_system/AppIcon/AppIcon";
import colors from "../../../design_system/styles/colors";
import fonts from "../../../design_system/styles/fonts";

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
  const titleOpacity = useOpacity();

  useEffect(() => {
    getLocationRequests();
  }, []);

  const renderTitle = () => {
    return (
      <Animated.View style={[styles.titleHeader, { opacity: titleOpacity }]}>
        <AppIcon name={"whatshot"} size={30} color={colors.ORANGE.CF_GOLD} />
        <Text style={styles.title}>Requests</Text>
      </Animated.View>
    );
  };

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
    return <View style={styles.requests}>{requests}</View>;
  };

  return (
    <View style={styles.container}>
      {renderTitle()}
      {renderLocationRequests()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 6,
    borderRadius: 20,
    margin: 20,
  },
  titleHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: fonts.ROBOTO.MEDIUM,
    fontSize: 30,
    color: colors.ORANGE.CF_GOLD,
  },
  locationRequests: {},
});

LocationRequestContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationRequestContainer);
