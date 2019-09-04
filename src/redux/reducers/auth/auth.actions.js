// @flow
import {
  EMAIL_KEY,
  PASSWORD_KEY,
  AUTH_TOKEN_KEY,
  load,
  store,
} from "../../../services/deviceStorage";
import { authenticate } from "../../../api/auth/login";

export const LOGIN_ACTION = "LOGIN";

const storeCredentialsInStorage = async (email, password) => {
  await store(EMAIL_KEY, email);
  await store(PASSWORD_KEY, password);
  console.log("Stored credentials");
};

export const logInWithPossibleCredentials = () => {
  return async (dispatch) => {
    const key = await load(AUTH_TOKEN_KEY);

    //for now forget the authentication step
    dispatch({
      type: LOGIN_ACTION,
      payload: {
        token: key,
      },
    });
  };
};

export const loginWithEmail = (email, password) => {
  return async (dispatch) => {
    const response = await authenticate(email, password);

    //store username and password in local storage

    //Then get the key from the server
    let apiKey = null;

    //DO A MOCK SERVER CHECK
    if (
      email &&
      password &&
      email.toLowerCase() === "e" &&
      password.toLowerCase() === "p"
    ) {
      //Store the key IN API CALL
      // await deviceStorage.store(AUTH_TOKEN_KEY, apiKey);
      storeCredentialsInStorage(email, password);
      apiKey = "key123";
    } else {
      apiKey = "INVALID";
    }
    dispatch({
      type: LOGIN_ACTION,
      payload: {
        token: apiKey,
      },
    });
  };
};

export const logOut = () => {
  //Delete the password/authkey from localstorage
  // deviceStorage.delete(AUTH_TOKEN_KEY);
  // deviceStorage.delete(PASSWORD_KEY);
  return (dispatch) => {
    //Delete clear the redux state.
    dispatch({
      type: LOGIN_ACTION,
      payload: {
        token: null,
      },
    });
  };
};

//Just a mock for development
export const getInvalidAuthentication = () => {
  return (dispatch) => {
    console.log(
      "Checking to see if user has valid login token, should return false"
    );
    dispatch({
      type: LOGIN_ACTION,
      payload: {
        token: "INVALID",
      },
    });
  };
};
