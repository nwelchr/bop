import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import SessionForm from './session_form';
import { login, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: Object.values(state.errors),
    formType: 'Log In',
    navLink: <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>,
    usernameInput: null,
    emailPlaceholder: "Email address or username",
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    loginDemoUser: () => dispatch(login({
        username: 'Demo User',
        email: 'demo@demo.com',
        password: 'password'
    }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);