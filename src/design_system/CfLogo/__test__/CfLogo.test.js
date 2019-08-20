// @flow
import React from "react";
import renderer from "react-test-renderer";
import CfLogo from "../CfLogo";

describe("CfLogo", () => {
  test("renders correctly", () => {
    const input = renderer.create(<CfLogo name="bug-report" />);
    expect(input).toMatchSnapshot();
  });
});
