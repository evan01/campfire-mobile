// @flow
export const SET_ACCOUNT_DETAILS = "SET_ACCOUNT_DETAILS";

export const getAccountDetails = () => {
  return (dispatch) => {
    // do api call here to retrieve these from the server
    const accountDetails = {
      userName: "eknox",
      email: "eknoxmobile@gmail.com",
      profilePicture: "Profile1",
      password: "password123",
    };

    dispatch({
      type: SET_ACCOUNT_DETAILS,
      payload: {
        token: accountDetails,
      },
    });
  };
};

export const updateAccountDetails = (
  email,
  username,
  profilePicture,
  password
) => {
  return (dispatch) => {
    //Api call here to store these in the server
    const accountDetails = {
      userName: email,
      email: username,
      profilePicture: profilePicture,
      password: password,
    };

    dispatch({
      type: SET_ACCOUNT_DETAILS,
      payload: accountDetails,
    });
  };
};

export const createNewAccount = (email, username, profilePicture, password) => {
  return (dispatch) => {
    //Api call here to create a new account in the server
    const accountDetails = {
      userName: username,
      email: email,
      profilePicture: profilePicture,
      password: password,
    };

    dispatch({
      type: SET_ACCOUNT_DETAILS,
      payload: accountDetails,
    });
  };
};
