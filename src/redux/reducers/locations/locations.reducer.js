// @flow
import { SET_LOCATION_REQUESTS } from "./locations.actions";

const defaultState = {
  requests: null,
  numRequests: 0,
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
    default:
      return state;
  }
};

export default locations;
