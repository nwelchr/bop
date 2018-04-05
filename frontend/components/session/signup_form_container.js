import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: Object.values(state.errors),
    formType: 'Sign Up',
    navLink: <Link to="/login">Log In</Link>,
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);