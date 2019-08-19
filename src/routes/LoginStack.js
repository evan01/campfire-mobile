// @flow
import MainLoginScreen from "../screens/login/LoginScreen/LoginScreen";
import { createStackNavigator } from "react-navigation";

const LoginRoutes = {
  default: MainLoginScreen,
  email: MainLoginScreen,
};

const LoginRouterOptions = {
  routes: LoginRoutes,
};

export default createStackNavigator(LoginRouterOptions.routes);
