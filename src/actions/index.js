import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questionsActions";
import { receiveUsers } from "./usersActions";

export function handleInitialData() {
  return function(dispatch) {
    getInitialData().then(function({ users, questions }) {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
