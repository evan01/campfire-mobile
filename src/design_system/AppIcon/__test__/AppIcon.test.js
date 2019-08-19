// @flow
import React from "react";
import renderer from "react-test-renderer";
import AppIcon from "../AppIcon";

describe("AppIcon", () => {
  test("renders correctly", () => {
    const Icon = renderer.create(<AppIcon name="bug-report" />);
    expect(Icon).toMatchSnapshot();
  });

  test("renders with different color", () => {
    const Icon = renderer.create(
      <AppIcon name={"star"} size={30} color={"orange"} />
    );
    expect(Icon).toMatchSnapshot();
  });
});
