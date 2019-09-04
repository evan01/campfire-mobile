// @flow
import _ from "lodash";

export const GET_FRIENDS = "GET_FRIENDS";
export const GET_FRIEND_REQUESTS = "GET_FRIEND_REQUESTS";
export const SEND_FRIEND_REQUEST = "SEND_FRIEND_REQUEST";
export const ADD_FRIEND = "ADD_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const ADD_BEST_FRIEND = "ADD_BEST_FRIEND";
export const REMOVE_BEST_FRIEND = "REMOVE_BEST_FRIEND";

export const getFriendRequests = () => {
  return (dispatch) => {
    //Api call to get all the new friend requests

    const requests = [
      {
        userId: "1231",
        name: "Tasnia Khan",
        picture: "profile2",
      },
      {
        userId: "2344",
        name: "Nutan Behki",
        picture: "profile6",
      },
    ];

    dispatch({
      type: GET_FRIEND_REQUESTS,
      payload: {
        requests: requests,
        numRequests: _.size(requests),
      },
    });
  };
};

export const addFriend = (friendId) => {
  //Api call to add friend

  const friend = {
    userId: "23411",
    name: "Jeremy Boileau",
    picture: "profile3",
  };

  return (dispatch) => {
    dispatch({
      type: ADD_FRIEND,
      payload: {
        friendId: friend.userId,
        friend: friend,
      },
    });
  };
};

export const removeFriend = (friendId) => {
  return (dispatch, getState) => {
    const friendsList = _.get(getState(), "friends");
    const newFriendsList = delete friendsList[friendId];

    dispatch({
      type: REMOVE_FRIEND,
      payload: {
        friends: newFriendsList,
      },
    });
  };
};

export const getFriends = () => {
  //Api call to get friends
  const friends = {
    user1: {
      name: "David Knox",
      userName: "Dknox",
      bestFriend: true,
      profilePicture: "profile1",
    },
    user2: {
      name: "Monica Conn",
      userName: "youngCurmudeon",
      bestFriend: false,
      profilePicture: "profile2",
    },
    user3: {
      name: "Tasnia Khan",
      userName: "JupiterJustice",
      bestFriend: true,
      profilePicture: "profile3",
    },
    user4: {
      name: "Jeremy Boilea",
      userName: "Armyguy",
      bestFriend: false,
      profilePicture: "profile4",
    },
    user5: {
      name: "Riley Simons",
      userName: "GalwayGal",
      bestFriend: false,
      profilePicture: "profile5",
    },
    user6: {
      name: "Bobby Ethan-Eliott",
      userName: "proSkier2019",
      bestFriend: false,
      profilePicture: "profile6",
    },
    user7: {
      name: "Nutan Behki",
      userName: "corporateWarlord",
      bestFriend: false,
      profilePicture: "profile7",
    },
    user8: {
      name: "Mira Knox",
      userName: "bookWormInc",
      bestFriend: false,
      profilePicture: "profile8",
    },
    user9: {
      name: "Mathew Brady",
      userName: "bookWorkInc",
      bestFriend: false,
      profilePicture: "profile6",
    },
  };
  return (dispatch) => {
    dispatch({
      type: GET_FRIENDS,
      payload: {
        friends: friends,
      },
    });
  };
};

// export const sendFriendRequest = (userId) => {
//     //Api call here
//     return (dispatch) => {
//       dispatch()
//   };
// };
