// @flow
import _ from "lodash";
export const SET_LOCATION_REQUESTS = "SET_LOCATION_REQUESTS";
export const REQUEST_FRIENDS_LOCATION = "REQUEST_FRIENDS_LOCATION";

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
  return (dispatch, getState) => {
    //Api call to notify other user, share details...ect

    //Get the new list of requests, reset the requests list
    const friendsList = _.get(getState(), "locations.requests");
    const newRequests = _.remove(friendsList, (req) => req.userId !== userId);
    dispatch({
      type: SET_LOCATION_REQUESTS,
      payload: {
        requests: newRequests,
        numRequests: _.size(newRequests),
      },
    });
  };
};

export const rejectLocationRequest = (userId) => {
  return (dispatch, getState) => {
    //Api call to notify user

    //Get the new list of requests, reset the requests list
    const friendsList = _.get(getState(), "locations.requests");
    const newRequests = _.remove(friendsList, (req) => req.userId !== userId);

    //remove request from list

    dispatch({
      type: SET_LOCATION_REQUESTS,
      payload: {
        requests: newRequests,
        numRequests: _.size(newRequests),
      },
    });
  };
};

export const requestFriendsLocation = (userId) => {
  //Efficient api call/websocket query for friends location
  const friendsLocation = [45.41148, -75.69075];

  return (dispatch) => {
    dispatch({
      type: REQUEST_FRIENDS_LOCATION,
      payload: {
        friendId: userId,
        friendsLocation: friendsLocation,
      },
    });
  };
};
