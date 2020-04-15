import React from "react";
import { Provider } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import HeaderContainer from './header/header_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import CreateQuestionFormContainer from './question/create_question_form_container';
import EditQuestionFormContainer from './question/edit_question_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <>
        <HeaderContainer />
        <div style={{ marginTop: "50px", height: "100%" }}>
            <Switch>
                <AuthRoute exact path="/login" component={LogInFormContainer} />
                <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                <ProtectedRoute exact path="/questions/ask" component={CreateQuestionFormContainer} />
                <ProtectedRoute exact path="/questions/:questionId/edit" component={EditQuestionFormContainer} />
            </Switch>
        </div>
    </>

);

export default App;