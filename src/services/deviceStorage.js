// @flow
import AsyncStorage from "@react-native-community/async-storage";
export const USERNAME_KEY = "CAMPFIRE_USERNAME";
export const EMAIL_KEY = "CAMPFIRE_USERNAME";
export const PASSWORD_KEY = "CAMPFIRE_PASSWORD";
export const AUTH_TOKEN_KEY = "CAMPFIRE_AUTH_KEY";
export const NAVIGATION_STATE_KEY = "CAMPFIRE_NAVIGATION_STATE";

export const store = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Async error", e);
  }
};

export const load = async (key) => {
  try {
    const jsonString = await AsyncStorage.getItem(key);
    return Promise.resolve(JSON.parse(jsonString));
  } catch (e) {
    console.error("Async error", e);
  }
};

export const delete_item = async (key, callback) => {
  try {
    return await AsyncStorage.removeItem(key, callback);
  } catch (e) {
    console.error("Async error", e);
  }
};
