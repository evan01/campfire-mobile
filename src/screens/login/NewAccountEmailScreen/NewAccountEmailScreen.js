// @flow
import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import colors from "../../../design_system/styles/colors";
import DefaultTextInput from "../../../design_system/TextInput/TextInput";
import CircleButton from "../../../design_system/CircleButton/CircleButton";
import CfLogo from "../../../design_system/CfLogo/CfLogo";
import fonts from "../../../design_system/styles/fonts";
import { updateAccountDetails } from "../../../redux/reducers/account/account.actions";

const propTypes = {
  navigation: PropTypes.object,
  updateAccountDetails: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  updateAccountDetails: updateAccountDetails,
};

const NewAccountEmailScreen = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [verifiedPassword, setVerifiedPassword] = useState(null);
  const [displayEmailError, setDisplayEmailError] = useState(false);
  const [displayPasswordError, setDisplayPasswordError] = useState(false);

  //From https://www.w3resource.com/javascript/form/email-validation.php
  const isEmailValid = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const toProfileSelectScreen = () => {
    if (isEmailValid(email) && verifiedPassword) {
      props.updateAccountDetails(email, null, "Profile1.png", password);
      props.navigation.navigate("newAccountUser");
    } else {
      setDisplayEmailError(true);
    }
  };

  const renderPasswordMismatchText = () => {
    return <Text style={styles.errorText}>Password did not match</Text>;
  };

  const pleaseEnterValidEmailText = () => {
    return <Text style={styles.errorText}>Please enter a valid email</Text>;
  };

  const renderLoginContainer = () => (
    <View style={styles.loginContainer}>
      <DefaultTextInput
        autoCompleteType={"email"}
        placeholder={"email"}
        autoFocus={true}
        blurOnSubmit={true}
        onChangeText={(txt) => {
          setEmail(txt);
          if (isEmailValid(txt)) {
            setDisplayEmailError(false);
          }
        }}
      />
      <DefaultTextInput
        secureTextEntry={true}
        placeholder={"password"}
        autoCompleteType={"password"}
        blurOnSubmit={true}
        onChangeText={(txt) => setPassword(txt)}
      />
      <DefaultTextInput
        secureTextEntry={true}
        placeholder={"verify password"}
        autoCompleteType={"password"}
        blurOnSubmit={true}
        onChangeText={(txt) => {
          if (password !== txt) {
            setDisplayPasswordError(true);
          } else {
            setVerifiedPassword(true);
            setDisplayPasswordError(false);
          }
        }}
      />
      {displayPasswordError && renderPasswordMismatchText()}
      {displayEmailError && pleaseEnterValidEmailText()}
    </View>
  );

  const renderLoginButton = () => (
    <CircleButton
      icon={"forward"}
      size={60}
      backgroundColor={colors.ORANGE.CF_FIRE}
      iconColor={colors.WHITE}
      onPress={toProfileSelectScreen}
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
        imageStyle={styles.imageStyle}
        source={require("./NewAccountBackground.jpg")}>
        {renderLoginContainer()}
        {renderLogo()}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.BLACK,
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
    resizeMode: "center",
  },
  imageStyle: {
    opacity: 0.2,
  },
  loginContainer: {
    padding: 20,
    height: 250,
    width: "100%",
    alignItems: "center",
    top: "40%",
  },
  logo: {
    bottom: 20,
    width: "100%",
    alignItems: "center",
    position: "absolute",
  },
  errorText: {
    fontFamily: fonts.ROBOTO.LIGHT,
    fontSize: fonts.SIZE.FONT_SIZE_H2,
    color: colors.ORANGE.CF_FIRE,
  },
});

NewAccountEmailScreen.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAccountEmailScreen);
