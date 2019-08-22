// @flow
import React from "react";
import { YellowBox, Platform, View } from "react-native";
import Router from "./screens/Router";
import { initStore } from "./redux/store";
import { Provider } from "react-redux";
import colors from "./design_system/styles/colors";

YellowBox.ignoreWarnings(["Warning: ReactNative.createElement"]);
const ignoreWarningsList = () => {
  YellowBox.ignoreWarnings([
    "Async Storage has been extracted from react-native core and will be removed in a future release.",
    "componentWillReceiveProps is deprecated and will be removed in the next major version. Use static getDerivedStateFromProps instead.",
    "componentWillMount is deprecated and will be removed in the next major version.",
  ]);
};

const App = () => {
  ignoreWarningsList();
  //Get Redux
  const store = initStore();
  return (
    <Provider store={store}>
      <View style={{ flex: 1, backgroundColor: colors.BLUE.CF_NIGHT }}>
        <Router
          onNavigationStateChange={(prevState, newState, action) => {
            // console.log(prevState, newState, action);
          }}
          // persistNavigationState={persistNavigationState}
          // loadNavigationState={loadNavigationState}
        />
      </View>
    </Provider>
  );
};

export default App;
