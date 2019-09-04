// @flow
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import _ from "lodash";
import CircleProfile from "../../../design_system/CircleProfile/CircleProfile";
import colors from "../../../design_system/styles/colors";
import fonts from "../../../design_system/styles/fonts";
import { useOpacity } from "../../../design_system/Animations/Opacity";

const FriendsList = (props) => {
  const { friends } = props;
  const friendIds = _.keys(friends);
  const opacity = useOpacity();

  const friendList = _.map(friendIds, (friendId) => {
    const renderNameUserName = (name, userName) => (
      <View style={styles.friendslistItem}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
    );

    const friend = friends[friendId];
    return (
      <Animated.View key={friendId} style={{ opacity: opacity }}>
        <TouchableOpacity
          style={styles.friendItem}
          onPress={() => console.log(friend)}>
          <CircleProfile
            name={friend.profilePicture}
            size={60}
            borderColor={colors.WHITE}
          />
          {renderNameUserName(friend.name, friend.userName)}
        </TouchableOpacity>
      </Animated.View>
    );
  });
  return (
    <Animated.ScrollView style={styles.container}>
      {friendList}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  friendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  friendslistItem: {
    marginVertical: 4,
  },
  name: {
    fontFamily: fonts.ROBOTO.LIGHT,
    fontSize: fonts.SIZE.FONT_SIZE_H1,
    color: colors.ORANGE.CF_GOLD,
  },
  userName: {
    fontFamily: fonts.ROBOTO.THIN,
    fontSize: fonts.SIZE.FONT_SIZE_H1,
    color: colors.WHITE,
  },
});

export default FriendsList;
