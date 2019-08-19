// @flow
import React from "react";
import { YellowBox, Platform, SafeAreaView } from "react-native";
import Router from "./screens/Router";
// import StoryBookUI from "./storybook/index";
import { initStore } from "./redux/store";
import { Provider } from "react-redux";

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Provider store={store}>
        <Router />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
