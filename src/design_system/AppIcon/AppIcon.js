// @flow
import React from "react";
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import PropTypes from "prop-types";

const defaultProps = {
  name: "cake",
  size: 60,
  color: "black",
};

const propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

const AppIcon = ({ name, size, color }) => (
  <Icon name={name} size={size} color={color} />
);

AppIcon.propTypes = propTypes;
AppIcon.defaultProps = defaultProps;
export default AppIcon;
