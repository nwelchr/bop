import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import SessionForm from './session_form';
import {
  signup,
  login,
  clearSessionErrors
} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: Object.values(state.errors.session),
  formType: 'Sign Up',
  navLink: (
    <p>
      Already have an account? <Link to="/login">Log In</Link>
    </p>
  ),
  usernameInput: true,
  emailPlaceholder: 'Email address'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  loginDemoUser: () =>
    dispatch(
      login({
        username: 'Demo User',
        email: 'demo@demo.com',
        password: 'password'
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
