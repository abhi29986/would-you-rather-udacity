import { ANSWER_QUESTION } from "../actions/types";

//function to check options
const optionChecker = store => {
  return next => {
    return action => {
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
};

export default optionChecker;