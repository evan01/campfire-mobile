// @flow
import React from "react";
import {
  YellowBox,
  Platform,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Router from "./containers/Router";
import { initStore } from "./redux/store";
import { Provider } from "react-redux";
import colors from "./design_system/styles/colors";
import {
  load,
  store,
  delete_item,
  NAVIGATION_STATE_KEY,
} from "./services/deviceStorage";

YellowBox.ignoreWarnings(["Warning: ReactNative.createElement"]);
const ignoreWarningsList = () => {
  YellowBox.ignoreWarnings([
    "Async Storage has been extracted from react-native core and will be removed in a future release.",
    "componentWillReceiveProps is deprecated and will be removed in the next major version. Use static getDerivedStateFromProps instead.",
    "componentWillMount is deprecated and will be removed in the next major version.",
  ]);
};

const persistNavigationState = async (navState) => {
  try {
    store(NAVIGATION_STATE_KEY, navState);
  } catch (err) {
    // handle the error
  }
};
const loadNavigationState = async () => {
  // await delete_item(NAVIGATION_STATE_KEY); if you ever need to clear nav state
  return await load(NAVIGATION_STATE_KEY);
};

const App = () => {
  ignoreWarningsList();
  const store = initStore();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const appContainerStyles = { backgroundColor: colors.WHITE, height: height };

  return (
    <SafeAreaView style={appContainerStyles}>
      <Provider store={store}>
        <Router
          persistNavigationState={persistNavigationState}
          loadNavigationState={loadNavigationState}
        />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
