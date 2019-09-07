// @flow
import React, { useEffect } from "react";
import { View, StyleSheet, Text, SectionList } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";
import { withNavigation } from "react-navigation";
import colors from "../../../../design_system/styles/colors";
import fonts from "../../../../design_system/styles/fonts";
import { getActiveLocations } from "../../../../redux/reducers/locations/locations.actions";
import { getFriends } from "../../../../redux/reducers/friends/friends.action";
import ActiveLocation from "./ActiveLocation";
import AppIcon from "../../../../design_system/AppIcon/AppIcon";

const propTypes = {
  navigation: PropTypes.object,
  locations: PropTypes.object,
  getActiveLocations: PropTypes.func,
  getFriends: PropTypes.func,
  friends: PropTypes.object,
};

const mapStateToProps = (state) => ({
  locations: state.locations.locations,
  friends: state.friends.friends,
});

const mapDispatchToProps = {
  getActiveLocations: getActiveLocations,
  getFriends: getFriends,
};

const ActiveLocationsContainer = (props) => {
  const { locations, friends } = props;

  useEffect(() => {
    props.getFriends();
    props.getActiveLocations();
  }, []);

  const renderLocationsHeader = () => {
    return (
      <View style={styles.title}>
        <Text style={styles.titleText}>Locations</Text>
      </View>
    );
  };

  const renderActiveLocation = (location) => {
    const { item } = location;
    return (
      <View>
        <ActiveLocation
          user={item.user}
          location={item.location}
          onPress={() => {}}
        />
      </View>
    );
  };

  const renderActiveLocations = () => {
    const friendLocationList = _.map(_.keys(locations), (key) => {
      return {
        user: friends[key],
        location: locations[key],
      };
    });

    const sections = [{ title: "Active Locations", data: friendLocationList }];
    return (
      <SectionList
        renderItem={renderActiveLocation}
        sections={sections}
        keyExtractor={(item, index) => item + index}
        initialNumToRender={10}
        ListHeaderComponent={renderLocationsHeader}
      />
    );
  };

  return <View style={styles.container}>{renderActiveLocations()}</View>;
};

const styles = StyleSheet.create({
  container: {},
  title: {
    // justifyContent: "center",
    paddingLeft: 20,
    paddingBottom: 10,
    flexDirection: "row",
  },
  titleText: {
    color: colors.BLUE.CF_MOON,
    fontFamily: fonts.ROBOTO.MEDIUM,
    fontSize: fonts.SIZE.FONT_SIZE_H3,
  },
});

ActiveLocationsContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(ActiveLocationsContainer));
