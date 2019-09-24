// @flow
import React, { useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import PropTypes from "prop-types";
import _ from "lodash";
import { connect } from "react-redux";
import colors from "../../../design_system/styles/colors";
import DefaultTextInput from "../../../design_system/TextInput/TextInput";
import CircleButton from "../../../design_system/CircleButton/CircleButton";
import CircleProfile, {
  PROFILES,
} from "../../../design_system/CircleProfile/CircleProfile";
import CfLogo from "../../../design_system/CfLogo/CfLogo";
import fonts from "../../../design_system/styles/fonts";
import { createNewAccount } from "../../../redux/reducers/account/account.actions";
import { useDropDown } from "../../../design_system/Animations/DropDown";
import { useOpacity } from "../../../design_system/Animations/Opacity";

const propTypes = {
  navigation: PropTypes.object,
  createNewAccount: PropTypes.func,
};

const mapStateToProps = (state) => ({
  account: state.account,
});

const mapDispatchToProps = {
  createNewAccount: createNewAccount,
};

const NewAccountScreen = (props) => {
  const [userName, setUserName] = useState(null);
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [profilePicture, setProfilePicture] = useState("profile1");
  const iconSelectDrop = useDropDown(50, 1000);
  const profileOpacity = useOpacity(0, 1, 1000);

  const toHomeScreen = () => {
    if (userName) {
      const { email, password } = props.account;
      props.createNewAccount(email, userName, profilePicture, password);
      props.navigation.navigate("home");
    } else {
      setInvalidUsername(true);
    }
  };

  const renderMandatoryUsernameText = () => {
    return (
      <Text style={styles.invalidUserName}>You must enter a username</Text>
    );
  };

  const renderUserNameSelect = () => (
    <View style={styles.loginContainer}>
      <DefaultTextInput
        autoCompleteType={"username"}
        placeholder={"choose a username"}
        autoFocus={true}
        blurOnSubmit={true}
        onChangeText={(txt) => {
          setInvalidUsername(false);
          setUserName(txt);
        }}
      />
      {invalidUsername && renderMandatoryUsernameText()}
    </View>
  );

  const renderCreateAccountButton = () => (
    <View style={styles.newAccountButton}>
      <CircleButton
        icon={"cloud-upload"}
        size={60}
        backgroundColor={colors.ORANGE.CF_FIRE}
        iconColor={colors.WHITE}
        onPress={toHomeScreen}
      />
    </View>
  );

  const renderSelectedProfilePicture = () => {
    return (
      <Animated.View
        style={[styles.selectedProfileContainer, { opacity: profileOpacity }]}>
        <CircleProfile
          name={profilePicture}
          size={140}
          borderColor={colors.WHITE}
        />
        <Text style={styles.profilePicture}>Profile Picture</Text>
      </Animated.View>
    );
  };

  const renderProfilePictureChoices = () => {
    const profilesComponents = _.map(PROFILES, (profile) => (
      <CircleProfile
        key={profile}
        name={profile}
        size={50}
        onPress={() => setProfilePicture(profile)}
        borderColor={colors.WHITE}
      />
    ));
    return (
      <Animated.View style={[styles.pictureChoices, { top: iconSelectDrop }]}>
        {profilesComponents}
      </Animated.View>
    );
  };

  return (
    <View style={styles.background}>
      <View style={styles.logo}>
        <CfLogo />
      </View>
      {renderUserNameSelect()}
      {renderSelectedProfilePicture()}
      {renderProfilePictureChoices()}
      {renderCreateAccountButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.BLACK,
    height: "100%",
    flex: 1,
  },
  invalidUserName: {
    fontFamily: fonts.ROBOTO.THIN,
    fontSize: fonts.SIZE.FONT_SIZE_H3,
    color: colors.ORANGE.CF_FIRE,
  },
  pictureChoices: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    marginHorizontal: 40,
  },
  newAccountButton: {
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: 30,
    flex: 1,
  },
  loginContainer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedProfileContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicture: {
    marginTop: 16,
    fontSize: fonts.SIZE.FONT_SIZE_H1,
    fontFamily: fonts.ROBOTO.THIN,
    color: colors.ORANGE.CF_FIRE,
  },
});

NewAccountScreen.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAccountScreen);
