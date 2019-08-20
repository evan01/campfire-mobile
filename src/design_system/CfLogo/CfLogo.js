// @flow
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const CfLogo = (props) => (
  <View style={styles.logoContainer}>
    <Text>
      <Text style={styles.camp}>Camp</Text>
      <Text style={styles.fire}>Fire</Text>
    </Text>
  </View>
);

CfLogo.displayName = "TextInput";

const styles = StyleSheet.create({
  logoContainer: {
    height: 50,
  },
  camp: {
    fontFamily: fonts.ROBOTO.LIGHT,
    fontSize: fonts.SIZE.LOGO,
    color: colors.ORANGE.CF_GOLD,
  },
  fire: {
    fontFamily: fonts.ROBOTO.LIGHT,
    fontSize: fonts.SIZE.LOGO,
    color: colors.ORANGE.CF_FIRE,
  },
});
export default CfLogo;
