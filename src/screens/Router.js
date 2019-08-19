// @flow
import React, { useEffect } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AppStack from "../routes/AppStack";
import LoginStack from "../routes/LoginStack";
import LoadingSplashScreen from "./login/LoginSplashScreen/LoadingSplashScreen";

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: LoadingSplashScreen,
    App: AppStack,
    Login: LoginStack,
  },
  {
    initialRouteName: "AuthLoading",
  }
);
export default createAppContainer(SwitchNavigator);
