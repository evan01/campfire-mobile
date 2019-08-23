// @flow
import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logInWithPossibleCredentials } from "../../../redux/reducers/auth/auth.actions";

const propTypes = {
  navigation: PropTypes.object,
  auth: PropTypes.object,
  getUserLoginToken: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  login: logInWithPossibleCredentials,
};

const LoginSplashScreen = (props) => {
  const { auth, login, navigation } = props;

  useEffect(() => {
    login();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (auth.token) {
      navigation.navigate("home");
    } else {
      navigation.navigate("signIn");
    }
  }, [auth, navigation]);

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={"large"} color={styles.indicator.color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  indicator: {
    color: "orange",
  },
});

LoginSplashScreen.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginSplashScreen);
