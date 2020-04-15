import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import questionsErrorsReducer from "./questions_errors_reducer";
import voteErrorsReducer from "./vote_errors_reducer";
import answerErrorsReducer from "./answer_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    questions: questionsErrorsReducer,
    answers: answerErrorsReducer,
    votes: voteErrorsReducer
});

export default errorsReducer;