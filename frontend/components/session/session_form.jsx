import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    window.setState = this.setState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.errors === nextProps.errors) {
      this.props.clearSessionErrors();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.email.includes('@')) {
      this.state = {
        username: this.state.email,
        email: '',
        password: this.state.password,
      };
    }
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.usernameInput) {
      this.usernameInput = (
        <input
          type="text"
          onChange={this.update('username')}
          value={this.state.username}
          placeholder="What should we call you?"
        />
      );
    }

    return (
      <div>
        <nav className="session-form-nav">
          <Link to="/">
            <img src="https://s3.us-east-2.amazonaws.com/bop-images/logos/logo-black-text.png" />
          </Link>
        </nav>
        <main className="session-form-main">
          {this.renderErrors()}
          <button className="demo-user" onClick={this.props.loginDemoUser}>
            Just browsing? Sign in as a demo user
          </button>
          <div className="divider">
            <strong>or {this.props.formType}</strong>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              type={this.props.formType === 'Sign Up' ? 'email' : 'text'}
              // type="email"
              onChange={this.update('email')}
              value={this.state.email}
              placeholder={this.props.emailPlaceholder}
            />
            <input
              type="password"
              onChange={this.update('password')}
              value={this.state.password}
              placeholder="Password"
            />
            {this.usernameInput}
            <input type="submit" value={this.props.formType} />
          </form>
          <h2>{this.props.navLink}</h2>
        </main>
      </div>
    );
  }
}

export default withRouter(SessionForm);
