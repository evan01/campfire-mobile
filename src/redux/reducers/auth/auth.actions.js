// @flow
export const LOGIN_ACTION = "LOGIN";

export const getAuthentication = () => {
  return (dispatch) => {
    // do api call here;
    console.log(
      "checking to see if user has valid login token, should return true"
    );
    const token = "some_token";

    //for now forget the authentication step
    dispatch({
      type: LOGIN_ACTION,
      payload: {
        token: token,
      },
    });
  };
};

export const getInvalidAuthentication = () => {
  return (dispatch) => {
    console.log(
      "Checking to see if user has valid login token, should return false"
    );
    dispatch({
      type: LOGIN_ACTION,
      payload: {
        token: "asdf",
      },
    });
  };
};
