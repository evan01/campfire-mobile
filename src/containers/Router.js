// @flow
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "../containers/home/HomeScreen";
import LoginScreen from "../containers/login/LoginScreen/LoginScreen";
import NewAccountEmailScreen from "../containers/login/NewAccountEmailScreen/NewAccountEmailScreen";
import NewAccountUsernameScreen from "../containers/login/NewAccountUsernameScreen/NewAccountUsernameScreen";
import NavigationScreen from "../containers/navigation/NavigationScreen";
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
