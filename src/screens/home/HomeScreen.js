// @flow
import React, { useEffect, useState } from "react";
import { Text, Button, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import _ from "lodash";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import { getLocationRequests } from "../../redux/reducers/locations/locations.actions";
import AppHeader from "../../design_system/AppHeader/AppHeader";
import fonts from "../../design_system/styles/fonts";
import colors from "../../design_system/styles/colors";
import LocationRequest from "./components/LocationRequest";

const propTypes = {
  navigation: PropTypes.object,
  numLocationRequests: PropTypes.number,
  locationRequests: PropTypes.array,
  account: PropTypes.object,
  getLocationRequests: PropTypes.func,
};

const mapStateToProps = (state) => ({
  locationRequests: state.locations.requests,
  numLocationRequests: state.locations.numRequests,
  account: state.account,
});

const mapDispatchToProps = {
  getLocationRequests: getLocationRequests,
};

const HomeScreen = (props) => {
  const { navigation, numLocationRequests, locationRequests } = props;
  const { userName, email, profilePicture, password } = props.account;

  useEffect(() => {
    props.getLocationRequests();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderHeader = () => (
    <AppHeader
      profileImage={profilePicture}
      onProfilePress={() => console.log("nav to settings page")}
      numNotifications={numLocationRequests}
    />
  );

  const renderLocationRequests = () => {
    const onConfirm = (userId) => {
      console.log(userId);
    };
    const onCancel = (userId) => {
      console.log(userId);
    };

    const requests = _.map(locationRequests, (user) => {
      return (
        <View key={user.name}>
          <LocationRequest
            user={user.name}
            userId={user.userId}
            onConfirm={onConfirm}
            onCancel={onCancel}
          />
        </View>
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
        onPress={() => navigation.navigate("Login")}
        title={"go to login screen"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
  },
  requests: {
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
