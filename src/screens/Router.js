// @flow
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "../screens/home/HomeScreen";
import LoginScreen from "../screens/login/LoginScreen/LoginScreen";
import NewAccountEmailScreen from "../screens/login/NewAccountEmailScreen/NewAccountEmailScreen";
import NewAccountUsernameScreen from "../screens/login/NewAccountUsernameScreen/NewAccountUsernameScreen";
import NavigationScreen from "../screens/navigation/NavigationScreen";
import FriendsScreen from "./friends/FriendsScreen";
import ProfileScreen from "./profile/ProfileScreen";
import StorybookContainer from "./storybook/Storybook";

const LoginRoutes = {
  default: LoginScreen,
  signIn: LoginScreen,
  newAccountEmail: NewAccountEmailScreen,
  newAccountUser: NewAccountUsernameScreen,
  navigation: NavigationScreen,
  friends: FriendsScreen,
  profile: ProfileScreen,
};

const AppRoutes = {
  home: HomeScreen,
  storybook: StorybookContainer,
};

const SwitchNavigator = createSwitchNavigator(
  {
    ...LoginRoutes,
    ...AppRoutes,
  },
  {
    initialRouteName: "default",
  }
);

export default createAppContainer(SwitchNavigator);
