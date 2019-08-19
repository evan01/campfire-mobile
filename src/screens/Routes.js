// @flow
import HomeScreen from "./home/HomeScreen";
import StoryBookUI from "../storybook/index";
import MainLoginScreen from "./login/MainLoginScreen";

const defaultNavOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    let iconName;
    // You can return any component that you like here!
    return <AppIcon name={iconName} size={25} color={tintColor} />;
  },
  headerStyle: {
    backgroundColor: "green",
  },
});

const MainAppStack = {
  home: HomeScreen,
  tab1: HomeScreen,
  storybook: StoryBookUI,
};

const LoginStack = {
  default: MainLoginScreen,
};

const Routes = {
  main: {
    routes: MainAppStack,
    options: {
      defaultNavigationOptions: defaultNavOptions,
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      },
    },
  },
  login: {
    routes: LoginStack,
  },
};

export default Routes;
