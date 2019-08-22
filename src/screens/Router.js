// @flow
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AppStack from "../routes/AppStack";
import LoginStack from "../routes/LoginStack";
import LoadingSplashScreen from "./login/LoginSplashScreen/LoadingSplashScreen";

const getInitialRouteName = async () => {
  //Eventually use some sort of persistent storage.
  const initialRoute = "AuthLoading";
  return {
    initialRouteName: initialRoute,
  };
};

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: LoadingSplashScreen,
    App: AppStack,
    Login: LoginStack,
  },
  getInitialRouteName()
);

export default createAppContainer(SwitchNavigator);
