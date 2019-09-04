// @flow
import {
  SET_LOCATION_REQUESTS,
  REQUEST_FRIENDS_LOCATION,
  GET_ACTIVE_LOCATIONS,
} from "./locations.actions";

const defaultState = {
  requests: null,
  numRequests: 0,
  locations: {},
  locationRequests: {},
};

const locations = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOCATION_REQUESTS: {
      return {
        ...state,
        requests: action.payload.requests,
        numRequests: action.payload.numRequests,
      };
    }
    case REQUEST_FRIENDS_LOCATION: {
      return {
        ...state,
        locationRequests: {
          ...state.locationRequests,
          [action.payload.userId]: action.payload.friendsLocation,
        },
      };
    }
    case GET_ACTIVE_LOCATIONS: {
      return {
        ...state,
        locations: action.payload.locations,
      };
    }
    default:
      return state;
  }
};

export default locations;
