import { getInitialData } from "../Utils/api";
import { receiveQuestions } from "../Actions/QuestionActions";
import { receiveUsers } from "../Actions/UserActions";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
}
