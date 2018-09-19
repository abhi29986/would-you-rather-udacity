import { combineReducers } from "redux";
import authedUserReducer from "./authedUserReducer";
import questionsReducer from "./questionsReducer";
import usersReducer from "./usersReducer";

//combining reducers
export default combineReducers({
  authedUser: authedUserReducer,
  questions: questionsReducer,
  users: usersReducer
});
