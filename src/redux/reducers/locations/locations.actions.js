// @flow
import _ from "lodash";
export const SET_LOCATION_REQUESTS = "SET_LOCATION_REQUESTS";
export const REQUEST_FRIENDS_LOCATION = "REQUEST_FRIENDS_LOCATION";
export const GET_ACTIVE_LOCATIONS = "GET_ACTIVE_LOCATIONS";

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
  //Efficient api call for requesting a friends location

  return (dispatch) => {
    dispatch({
      type: REQUEST_FRIENDS_LOCATION,
      payload: {
        userId: userId,
      },
    });
  };
};

export const getActiveLocations = () => {
  const locations = {
    user1: {
      location: [45.41148, -75.69075],
      expirationDate: 1567137600000,
    },
    user2: {
      location: [45.41148, -75.69075],
      expirationDate: 1567137600000,
    },
    user3: {
      location: [45.41148, -75.69075],
      expirationDate: 1567137600000,
    },
    user4: {
      location: [45.41148, -75.69075],
      expirationDate: 1567137600000,
    },
  };

  return (dispatch) => {
    dispatch({
      type: GET_ACTIVE_LOCATIONS,
      payload: {
        locations: locations,
      },
    });
  };
};
