// @flow
import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAuthentication } from "../../../redux/reducers/auth/auth.actions";

const propTypes = {
  navigation: PropTypes.object,
  auth: PropTypes.object,
  getUserLoginToken: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  getUserLoginToken: getAuthentication,
};

const LoginSplashScreen = (props) => {
  const { auth, getUserLoginToken, navigation } = props;
  const [hasTokenForUser, setHasTokenForUser] = useState(false);

  useEffect(() => {
    getUserLoginToken();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (hasTokenForUser) {
      if (auth.token) {
        navigation.navigate("App");
      } else {
        navigation.navigate("Login");
      }
    } else {
      if (hasTokenForUser == false && auth.token) {
        setHasTokenForUser(true);
      }
    }
  }, [auth, hasTokenForUser, navigation]);

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
