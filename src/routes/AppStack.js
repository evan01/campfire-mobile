// @flow
import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/home/HomeScreen";
import StorybookUIRoot from "../../storybook";
import AppIcon from "../design_system/AppIcon/AppIcon";

const defaultNavOptions = (navigation) => ({
  tabBarIcon: (items) => {
    const { routeName } = navigation.state;
    const { focused, horizontal, tintColor } = items;
    return <AppIcon name={routeIcons[routeName]} size={25} color={tintColor} />;
  },
});

const routes = {
  home: StorybookUIRoot,
  tab1: HomeScreen,
  storybook: HomeScreen,
};

const routeIcons = {
  home: "home",
  tab1: "cloud",
  storybook: "star",
};

const AppStack = {
  routes: routes,
  options: {
    defaultNavigationOptions: ({ navigation }) => defaultNavOptions(navigation),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    },
  },
};

export default createStackNavigator(AppStack.routes, AppStack.options);
