// @flow
import _ from "lodash";
export const SET_LOCATION_REQUESTS = "SET_LOCATION_REQUESTS";

export const getLocationRequests = () => {
  return (dispatch) => {
    // do api call here to retrieve these from the server
    const locationRequests = [
      {
        name: "Nutan Behki",
        userId: "231",
      },
      {
        name: "Tasnia Khan",
        userId: "123",
      },
      {
        name: "Mira Knox",
        userId: "143",
      },
    ];

    dispatch({
      type: SET_LOCATION_REQUESTS,
      payload: {
        requests: locationRequests,
        numRequests: _.size(locationRequests),
      },
    });
  };
};

export const acceptLocationRequest = (userId) => {
  return (dispatch) => {
    //Api call to notify other user, share details...ect

    //Get the new list of requests, reset the requests list
    dispatch({
      type: SET_LOCATION_REQUESTS,
      payload: {
        userId: userId,
      },
    });
  };
};

export const rejectLocationRequest = (userId) => {
  return (dispatch) => {
    //Api call to notify user

    //Get the new list of requests, reset the requests list
    const locationRequests = [
      {
        name: "Nutan Behki",
        userId: "231",
      },
      {
        name: "Tasnia Khan",
        userId: "123",
      },
      {
        name: "Mira Knox",
        userId: "143",
      },
    ];

    //remove request from list

    dispatch({
      type: SET_LOCATION_REQUESTS,
      payload: {
        requests: locationRequests,
        numRequests: _.size(locationRequests),
      },
    });
  };
};
