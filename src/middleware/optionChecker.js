import { ANSWER_QUESTION } from "../actions/types";

//function to check options
export default function optionChecker(store) {
  return function(next) {
    return function(action) {
      if (action.type === ANSWER_QUESTION) {
        const users = store.getState().users;
        const answers = Object.keys(users[action.authedUser].answers);
        if (answers.indexOf(action.qid) > -1) {
          return alert("You can only answer one question at a time.");
        }
      }
      return next(action);
    };
  };
}
