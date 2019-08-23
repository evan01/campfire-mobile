// @flow
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "../screens/home/HomeScreen";
import StorybookUIRoot from "../../storybook";
import LoginScreen from "../screens/login/LoginScreen/LoginScreen";
import NewAccountEmailScreen from "../screens/login/NewAccountEmailScreen/NewAccountEmailScreen";
import NewAccountUsernameScreen from "../screens/login/NewAccountUsernameScreen/NewAccountUsernameScreen";
import LoadingSplashScreen from "../screens/login/LoginSplashScreen/LoadingSplashScreen";
import NavigationScreen from "../screens/navigation/NavigationScreen";
import FriendsScreen from "./friends/FriendsScreen";

const LoginRoutes = {
  default: LoginScreen,
  signIn: LoginScreen,
  newAccountEmail: NewAccountEmailScreen,
  newAccountUser: NewAccountUsernameScreen,
  authLoading: LoadingSplashScreen,
  navigation: NavigationScreen,
  friends: FriendsScreen,
};

const AppRoutes = {
  home: HomeScreen,
  storybook: StorybookUIRoot,
};

const SwitchNavigator = createSwitchNavigator(
  {
    ...LoginRoutes,
    ...AppRoutes,
  },
  {
    initialRouteName: "authLoading",
  }
);

export default createAppContainer(SwitchNavigator);
