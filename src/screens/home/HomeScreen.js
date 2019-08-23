// @flow
import React, { useEffect, useState } from "react";
import { Text, Button, StyleSheet, View, Animated } from "react-native";
import PropTypes from "prop-types";
import _ from "lodash";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import {
  getLocationRequests,
  acceptLocationRequest,
  rejectLocationRequest,
} from "../../redux/reducers/locations/locations.actions";
import AppHeader from "../../design_system/AppHeader/AppHeader";
import fonts from "../../design_system/styles/fonts";
import colors from "../../design_system/styles/colors";
import LocationRequest from "./components/LocationRequest";
import { useDropDown } from "../../design_system/Animations/DropDown";

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

const HomeScreen = (props) => {
  const { navigation, numLocationRequests, locationRequests } = props;
  const { userName, email, profilePicture, password } = props.account;
  const locationRequestDrop = useDropDown(50, 750);

  useEffect(() => {
    props.getLocationRequests();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderHeader = () => (
    <AppHeader
      profileImage={profilePicture}
      numNotifications={numLocationRequests}
      navigation={navigation}
    />
  );

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

  return (
    <SafeAreaView style={styles.background}>
      {renderHeader()}
      {renderLocationRequests()}
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
    marginLeft: 40,
  },
});

HomeScreen.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
