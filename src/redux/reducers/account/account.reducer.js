// @flow
import { SET_ACCOUNT_DETAILS } from "./account.actions";

const defaultState = {
  userName: null,
  email: null,
  profilePicture: null,
  password: null,
};

const account = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ACCOUNT_DETAILS: {
      return {
        ...state,
        userName: action.payload.userName,
        email: action.payload.email,
        profilePicture: action.payload.profilePicture,
        password: action.payload.password,
      };
    }
    default:
      return state;
  }
};

export default account;
