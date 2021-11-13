import { combineReducers } from "redux";
import authUser from "./AuthUserReducer";
import questions from "./QuestionReducer";
import users from "./UserReducer";

export default combineReducers({
  authUser,
  questions,
  users,
});
