import React from 'react';
import NewSessionContainer from './session/new_session_container';
import { login, logout, signup } from '../actions/session_actions';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainPageContainer from './main_page/main_page_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';



window.login = login;
window.logout = logout;
window.signup = signup;

const App = () => (
  <div>
    <Route exact path="/" component={NewSessionContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route path="/browse" component={MainPageContainer} />
  </div>
);

export default App;
