// @flow
import React from "react";
import renderer from "react-test-renderer";
import FlatButton from "../FlatButton";

describe("FlatButton", () => {
  test("renders correctly", () => {
    const input = renderer.create(
      <FlatButton text="Press Here" onPress={() => {}} />
    );
    expect(input).toMatchSnapshot();
  });
});
