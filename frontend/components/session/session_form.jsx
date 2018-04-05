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

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    
    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
        );
    }

    render () {
        return (
            <div>
                <nav className="session-form-nav">
                    <img src="assets/logo-black-text-separated.png" />
                </nav>
                <main class="session-form-main">
                    <h1>{this.props.formType}</h1>
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input 
                                type="email"
                                onChange={this.update('email')}  
                                value={this.state.email}
                                placeholder="Email address"
                                />
                        </label>
                        <label>
                            <input 
                                type="password"
                                onChange={this.update('password')}  
                                value={this.state.password}
                                placeholder="Password"
                                />
                        </label>
                        <label>
                            <input 
                                type="text"
                                onChange={this.update('username')}  
                                value={this.state.username}
                                placeholder="What should we call you?"
                                />
                        </label>
                        <input type="submit" value={this.props.formType} />
                    </form>
                    <h1>{this.props.navLink}</h1>
                </main>
            </div>
        );
    }
}

export default withRouter(SessionForm);