// @flow
import React from "react";
import { View, Text, Button } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DefaultTextInput from "../../design_system/TextInput/TextInput";

const propTypes = {
  navigation: PropTypes.object,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const HomeScreen = (props) => {
  const { navigation } = props;
  const toLoginScreen = () => {
    navigation.navigate("Login");
  };

  return (
    <View>
      <Text> {"home screen"} </Text>
      <Button onPress={toLoginScreen} title={"go to login screen"} />
      <DefaultTextInput />
    </View>
  );
};

HomeScreen.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
