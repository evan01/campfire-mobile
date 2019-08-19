// @flow
import React from "react";
import renderer from "react-test-renderer";
import TextInput from "../TextInput";

describe("TextInput", () => {
  test("renders correctly", () => {
    const input = renderer.create(<TextInput name="bug-report" />);
    expect(input).toMatchSnapshot();
  });
});
