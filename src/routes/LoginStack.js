// @flow
import MainLoginScreen from "../screens/login/LoginScreen/LoginScreen";
import { createSwitchNavigator } from "react-navigation";
import NewAccountEmailScreen from "../screens/login/NewAccountEmailScreen/NewAccountEmailScreen";
import NewAccountUsernameScreen from "../screens/login/NewAccountUsernameScreen/NewAccountUsernameScreen";

const LoginRoutes = {
  default: MainLoginScreen,
  signIn: MainLoginScreen,
  newAccountEmail: NewAccountEmailScreen,
  newAccountUser: NewAccountUsernameScreen,
};

const LoginRouterOptions = {
  routes: LoginRoutes,
};

export default createSwitchNavigator(LoginRouterOptions.routes);
