// @flow
import axios from "axios";
export const get = (url, params) => {
  console.log("Get", url);
  axios.get(url);
};
