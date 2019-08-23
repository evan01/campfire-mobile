// @flow
import {
  GET_FRIEND_REQUESTS,
  ADD_FRIEND,
  REMOVE_FRIEND,
  ADD_BEST_FRIEND,
  GET_FRIENDS,
} from "./friends.action";

const defaultState = {
  requests: [],
  numFriendRequests: 0,
  friendRequests: {},
  //   outgoingFriendRequests: {},
  friends: {},
};

const locations = (state = defaultState, action) => {
  switch (action.type) {
    case GET_FRIENDS: {
      return {
        ...state,
        friends: action.payload.friends,
      };
    }
    case GET_FRIEND_REQUESTS: {
      return {
        ...state,
        requests: action.payload.requests,
        numRequests: action.payload.numRequests,
      };
    }
    case ADD_FRIEND: {
      return {
        ...state,
        friends: {
          ...state.friends,
          [action.payload.friendId]: action.payload.friend,
        },
      };
    }
    case REMOVE_FRIEND: {
      return {
        ...state,
        friends: action.payload.friends,
      };
    }
    case ADD_BEST_FRIEND: {
      return {
        ...state,
        friends: action.payload.friends,
      };
    }
    default:
      return state;
  }
};

export default locations;
