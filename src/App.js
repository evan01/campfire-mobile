// @flow
import React from "react";
import { YellowBox, Platform, View, StyleSheet } from "react-native";
import Router from "./screens/Router";
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
  return (
    <Provider store={store}>
      <View style={styles.app}>
        <Router
          persistNavigationState={persistNavigationState}
          loadNavigationState={loadNavigationState}
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: colors.BLUE.CF_NIGHT },
});

export default App;
