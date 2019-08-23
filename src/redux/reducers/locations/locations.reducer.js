// @flow
import {
  SET_LOCATION_REQUESTS,
  REQUEST_FRIENDS_LOCATION,
} from "./locations.actions";

const defaultState = {
  requests: null,
  numRequests: 0,
  friends: {},
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
        friends: {
          ...state.friends,
          [action.payload.friendId]: action.payload.friendsLocation,
        },
        active: action.payload.friendId,
      };
    }
    default:
      return state;
  }
};

export default locations;
