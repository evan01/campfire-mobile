// @flow
import React from "react";
import { View, Text, Button } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const propTypes = {
  navigation: PropTypes.object,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const MainLoginScreen = (props) => {
  const { navigation } = props;
  const toHomeScreen = () => {
    navigation.navigate("storybook");
  };
  return (
    <View>
      <Text> {"main login screen"} </Text>
      <Button onPress={toHomeScreen} title={"go to home screen"} />
    </View>
  );
};

MainLoginScreen.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLoginScreen);
