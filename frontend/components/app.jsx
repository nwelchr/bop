import React from 'react';
import NewSessionContainer from './session/new_session_container';
import { login, logout, signup } from '../actions/session_actions';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainPageContainer from './main_page/main_page_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={NewSessionContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <MainPageContainer />
    </Switch>
  </div>
);

export default App;
