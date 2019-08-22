// @flow
import deviceStorage, {
  EMAIL_KEY,
  PASSWORD_KEY,
  AUTH_TOKEN_KEY,
} from "../../../services/deviceStorage";

export const LOGIN_ACTION = "LOGIN";

const getCredentialsFromStorage = async () => {
  const key = await deviceStorage.load(AUTH_TOKEN_KEY, (newKey) => newKey);
  const username = await deviceStorage.load(EMAIL_KEY);
  const password = await deviceStorage.load(PASSWORD_KEY);

  return {
    key: key,
    username: username,
    password: password,
  };
};

const storeCredentialsInStorage = async (email, password) => {
  await deviceStorage.store(EMAIL_KEY, email);
  await deviceStorage.store(PASSWORD_KEY, password);
  console.log("Stored credentials");
};

export const logInWithPossibleCredentials = () => {
  return async (dispatch) => {
    let apiKey = null;
    //First check if there is a key ,username and password in local storage
    const { key, username, password } = getCredentialsFromStorage();
    if (key) {
      //Then they have for sure signed in before
      if (username && password && key) {
        //Get a new authentication key here, for now don't bother.

        // do api call here;
        apiKey = key;
      }
    }

    //for now forget the authentication step
    dispatch({
      type: LOGIN_ACTION,
      payload: {
        token: apiKey,
      },
    });
  };
};

export const loginWithEmail = (email, password) => {
  return (dispatch) => {
    //store username and password in local storage

    //Then get the key from the server
    let apiKey = null;

    //DO A MOCK SERVER CHECK
    if (
      email &&
      password &&
      email.toLowerCase() === "evan01" &&
      password.toLowerCase() === "password"
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
  deviceStorage.delete(AUTH_TOKEN_KEY);
  deviceStorage.delete(PASSWORD_KEY);
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
