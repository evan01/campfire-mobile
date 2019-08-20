// @flow
import React from "react";
import renderer from "react-test-renderer";
import CircleButton from "../CircleButton";

describe("CircleButton", () => {
  test("renders correctly", () => {
    const input = renderer.create(
      <CircleButton
        icon={"cake"}
        size={20}
        backgroundColor={"white"}
        iconColor={"red"}
        onPress={() => {}}
      />
    );
    expect(input).toMatchSnapshot();
  });
});
