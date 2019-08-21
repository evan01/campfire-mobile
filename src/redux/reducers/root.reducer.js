// @flow
import { combineReducers } from "redux";
import auth from "./auth/auth.reducer";
import navigation from "./navigation/navigation.reducer";
import account from "./account/account.reducer";

export default combineReducers({ auth, navigation, account });
