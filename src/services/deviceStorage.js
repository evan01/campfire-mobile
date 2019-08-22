// @flow
import { AsyncStorage } from "react-native";
export const USERNAME_KEY = "CAMPFIRE_USERNAME";
export const PASSWORD_KEY = "CAMPFIRE_PASSWORD";
export const AUTH_TOKEN_KEY = "CAMPFIRE_AUTH_KEY";

const deviceStorage = {
  async store(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Async error", e);
    }
  },
  async load(key, callback = () => {}) {
    try {
      return await AsyncStorage.getItem(key, callback);
    } catch (e) {
      console.error("Async error", e);
    }
  },
  async delete(key, callback) {
    try {
      return await AsyncStorage.removeItem(key, callback);
    } catch (e) {
      console.error("Async error", e);
    }
  },
};

export default deviceStorage;
