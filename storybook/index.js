// @flow
import { getStorybookUI, configure } from "@storybook/react-native";
import "./rn-addons";
import { loadStories } from "./storyLoader";

configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
