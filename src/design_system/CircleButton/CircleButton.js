// @flow
import React from "react";
import { TouchableHighlight, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import AppIcon from "../AppIcon/AppIcon";

const propTypes = {
  icon: PropTypes.string,
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
  iconColor: PropTypes.string,
  onPress: PropTypes.func,
};

const CircleButton = (props) => {
  const getButtonStyles = () => ({
    borderRadius: props.size / 2,
    width: props.size,
    height: props.size,
    backgroundColor: props.backgroundColor,
  });

  return (
    <View>
      <TouchableHighlight
        style={[styles.buttonWrapper, getButtonStyles()]}
        onPress={props.onPress}>
        <AppIcon
          name={props.icon}
          size={props.size / 1.5}
          color={props.iconColor}
        />
      </TouchableHighlight>
    </View>
  );
};

CircleButton.displayName = "TextInput";

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
});

CircleButton.propTypes = propTypes;
export default CircleButton;
