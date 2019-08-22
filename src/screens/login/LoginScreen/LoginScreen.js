// @flow
import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import colors from "../../../design_system/styles/colors";
import DefaultTextInput from "../../../design_system/TextInput/TextInput";
import CircleButton from "../../../design_system/CircleButton/CircleButton";
import CfLogo from "../../../design_system/CfLogo/CfLogo";
import fonts from "../../../design_system/styles/fonts";
import FlatButton from "../../../design_system/FlatButton/FlatButton";
import { loginWithEmail } from "../../../redux/reducers/auth/auth.actions";

const propTypes = {
  navigation: PropTypes.object,
  loginWithEmail: PropTypes.func,
  auth: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  loginWithEmail: loginWithEmail,
};

const MainLoginScreen = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [displaySignInError, setDisplaySignInError] = useState(false);

  useEffect(() => {
    if (props.auth.token) {
      if (props.auth.token === "INVALID") {
        setDisplaySignInError(true);
      } else {
        props.navigation.navigate("home");
      }
    }
    console.log("go to home screen", props.auth);
  }, [props.auth, props.navigation]);

  const loginAndGoToHomeScreen = () => {
    props.loginWithEmail(email, password);
  };

  const renderSignInErrorText = () => {
    return <Text style={styles.errorText}>Sign in failed</Text>;
  };

  const renderLoginContainer = () => (
    <View style={styles.loginContainer}>
      <DefaultTextInput
        autoCompleteType={"username"}
        placeholder={"username"}
        autoFocus={true}
        blurOnSubmit={true}
        onChangeText={(txt) => {
          setEmail(txt);
        }}
      />
      <DefaultTextInput
        secureTextEntry={true}
        placeholder={"password"}
        autoCompleteType={"password"}
        blurOnSubmit={true}
        onChangeText={(txt) => {
          setPassword(txt);
        }}
      />
      <FlatButton
        style={styles.newAccountButton}
        backgroundColor={colors.ORANGE.CF_GOLD}
        text={"Create a new Account"}
        onPress={() => props.navigation.navigate("newAccountEmail")}
      />
      {displaySignInError && renderSignInErrorText()}
    </View>
  );

  const renderLoginButton = () => (
    <CircleButton
      icon={"forward"}
      size={60}
      backgroundColor={colors.ORANGE.CF_FIRE}
      iconColor={colors.WHITE}
      onPress={loginAndGoToHomeScreen}
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
  errorText: {
    marginTop: 30,
    fontFamily: fonts.ROBOTO.LIGHT,
    fontSize: fonts.SIZE.FONT_SIZE_H2,
    color: colors.ORANGE.CF_FIRE,
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
