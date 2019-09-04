// @flow
import { post } from "../apiRequest";

export const authenticate = async (email, password) => {
  return await post(
    "https://337e154b.ngrok.io/authenticate",
    {},
    {
      EMAIL: email,
      PASSWORD: password,
    }
  );
};
