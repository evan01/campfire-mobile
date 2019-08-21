// @flow
import MainLoginScreen from "../screens/login/LoginScreen/LoginScreen";
import { createSwitchNavigator } from "react-navigation";
import NewAccountScreen from "../screens/login/NewAccountScreen/NewAccountScreen";

const LoginRoutes = {
  default: MainLoginScreen,
  signIn: MainLoginScreen,
  createAccount: NewAccountScreen,
};

const LoginRouterOptions = {
  routes: LoginRoutes,
};

export default createSwitchNavigator(LoginRouterOptions.routes);
