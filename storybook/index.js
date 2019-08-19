// @flow
import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";
import "./rn-addons";

// import stories
configure(() => {
  require("../design_system/TextInput/__stories__/TextInput.story.js");
  require("../design_system/AppIcon/__stories__/AppIcon.story.js");
}, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});
AppRegistry.registerComponent("mobile", () => StorybookUIRoot);

export default StorybookUIRoot;
