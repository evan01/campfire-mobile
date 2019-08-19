// @flow
import { LOGIN_ACTION } from "./auth.actions";

const defaultState = {
  token: null,
  email: null,
};

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      return {
        ...state,
        token: action.payload.token,
      };
    }
    default:
      return state;
  }
};

export default auth;
