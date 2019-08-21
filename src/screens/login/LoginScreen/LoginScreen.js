// @flow
import React from "react";
import { View, StyleSheet, ImageBackground, Button } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import colors from "../../../design_system/styles/colors";
import DefaultTextInput from "../../../design_system/TextInput/TextInput";
import CircleButton from "../../../design_system/CircleButton/CircleButton";
import CfLogo from "../../../design_system/CfLogo/CfLogo";
import fonts from "../../../design_system/styles/fonts";
import FlatButton from "../../../design_system/FlatButton/FlatButton";

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

  const renderLoginContainer = () => (
    <View style={styles.loginContainer}>
      <DefaultTextInput
        autoCompleteType={"email"}
        placeholder={"email"}
        autoFocus={true}
        blurOnSubmit={true}
      />
      <DefaultTextInput
        secureTextEntry={true}
        placeholder={"password"}
        autoCompleteType={"password"}
        blurOnSubmit={true}
      />
      <FlatButton
        style={styles.newAccountButton}
        backgroundColor={colors.ORANGE.CF_GOLD}
        text={"Create a new Account"}
        onPress={() => navigation.navigate("newAccountEmail")}
      />
    </View>
  );

  const renderLoginButton = () => (
    <CircleButton
      icon={"forward"}
      size={60}
      backgroundColor={colors.ORANGE.CF_FIRE}
      iconColor={colors.WHITE}
      onPress={toHomeScreen}
    />
  );

  const renderLogo = () => (
    <View style={styles.logo}>
      {renderLoginButton()}
      <CfLogo />
    </View>
  );

  return (
    <View style={styles.background}>
      <ImageBackground
        style={styles.image}
        source={require("./LoginBackground.png")}>
        {renderLoginContainer()}
        {renderLogo()}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.BLUE.CF_NIGHT,
  },
  title: {
    fontFamily: fonts.ROBOTO.LIGHT,
    fontSize: fonts.SIZE.LOGO,
    color: colors.WHITE,
    width: "100%",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  loginContainer: {
    padding: 20,
    height: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    top: "40%",
  },
  logo: {
    bottom: 20,
    width: "100%",
    alignItems: "center",
    position: "absolute",
  },
  newAccountButton: {
    marginTop: 10,
  },
});

MainLoginScreen.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLoginScreen);
