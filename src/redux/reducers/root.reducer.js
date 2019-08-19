// @flow
import { combineReducers } from "redux";
import auth from "./auth/auth.reducer";
import navigation from "./navigation/navigation.reducer";

export default combineReducers({ auth, navigation });
