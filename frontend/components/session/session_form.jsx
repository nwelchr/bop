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
                <h1>{this.props.formType} or {this.props.navLink} instead!</h1>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label>Username
                        <input 
                            type="text"
                            onChange={this.update('username')}  
                            value={this.state.username}
                            />
                    </label>
                    <label>Email
                        <input 
                            type="email"
                            onChange={this.update('email')}  
                            value={this.state.email}
                            />
                    </label>
                    <label>Password
                        <input 
                            type="password"
                            onChange={this.update('password')}  
                            value={this.state.password}
                            />
                    </label>
                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);