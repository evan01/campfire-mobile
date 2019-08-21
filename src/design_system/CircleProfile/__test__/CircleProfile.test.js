// @flow
import React from "react";
import renderer from "react-test-renderer";
import CircleProfile from "../CircleProfile";
import colors from "../../styles/colors";

describe("CircleProfile", () => {
  test("renders correctly", () => {
    const Profile = renderer.create(
      <CircleProfile
        name="name"
        size={30}
        borderColor={colors.WHITE}
        notifications={2}
      />
    );
    expect(Profile).toMatchSnapshot();
  });

  test("renders correctly with different border color", () => {
    const Profile = renderer.create(
      <CircleProfile
        name={"star"}
        onPress={() => {}}
        size={30}
        borderColor={"white"}
      />
    );
    expect(Profile).toMatchSnapshot();
  });

  test("renders correctly with notifications passed in", () => {
    const Profile = renderer.create(
      <CircleProfile
        name={"star"}
        onPress={() => {}}
        size={30}
        borderColor={"white"}
      />
    );
    expect(Profile).toMatchSnapshot();
  });

  test("renders correctly with different borderColor passed in", () => {
    const Profile = renderer.create(
      <CircleProfile
        name={"star"}
        onPress={() => {}}
        size={30}
        borderColor={"red"}
      />
    );
    expect(Profile).toMatchSnapshot();
  });
});
