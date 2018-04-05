import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };

        window.setState = this.setState;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log(this.props);
        e.preventDefault();
        if (!this.state.email.includes('@')) {
            this.state = { username: this.state.email, email: "", password: this.state.password };
        }
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    
    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    renderErrors() {
        return (
            <ul class="session-errors">
                {this.props.errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
        );
    }

    render () {
        console.log(this.props);
        if (this.props.usernameInput) {
            this.usernameInput = (<input 
            type="text"
            onChange={this.update('username')} 
            value={this.state.username}
            placeholder="What should we call you?"
        />);
        }

        return (
            <div>
                <nav className="session-form-nav">
                    <img src="assets/logo-black-text-separated.png" />
                </nav>
                <main className="session-form-main">
                    <div className="divider">
                        <strong>{this.props.formType}</strong>
                    </div>
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
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