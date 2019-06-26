import React, { Component } from 'react';

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.email,this.state.password);
    }

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        return (
            <div className='text-center'>
                <h3 className='mb-3 font-weight-normal'>Login To Access your Notes</h3>
                <div className='panel-body'>
                    <form onSubmit={this.handleSubmit}>
                        <label for="email" class="sr-only">Email address</label>
                        <input type='text' className='form-control' id='email' placeholder='Enter Email' value={this.state.email}
                            onChange={this.handleEmailChange}
                            required />
                        <label for="password" class="sr-only">Password</label>
                        <input type='text' className='form-control' id='password' placeholder='Enter Password' value={this.state.password}
                            onChange={this.handlePasswordChange}  required/>
                        <button type='submit' className='btn btn-primary btn-lg btn-block'>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;