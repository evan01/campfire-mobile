// @flow
export const LOGIN_ACTION = "LOGIN";

export const getAuthentication = () => {
  return (dispatch) => {
    // do api call here;
    console.log("checking to see if user has valid login token");
    const token = "some_token";
    dispatch({
      type: LOGIN_ACTION,
      payload: {
        token: token,
      },
    });
  };
};
