import React, { Component } from 'react';

class RegisterForm extends Component {

    state = {
        fname:'',
        lname:'',
        email: '',
        password:'',
        phone:'',
        gender:''
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.email,this.state.password);
    }

    handleFnameChange = e => {
        this.setState({
            fname: e.target.value
        });
    }

    handleLnameChange = e => {
        this.setState({
            lname: e.target.value
        });
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

    handleGenderChange = e => {
        this.setState({
            gender: e.target.value
        });
    }

    handlePhoneChange = e => {
        this.setState({
            phone: e.target.value
        });
    }

    render() {
        return (
            <div className='text-center'>
                <h3 className='mb-3 font-weight-normal'>Register</h3>
                <div className='panel-body'>
                    <form onSubmit={this.handleSubmit}>
                        <label for="fname" classN="sr-only">First Name</label>
                        <input type='text' className='form-control' id='fname' placeholder='Enter First Name' value={this.state.fname}
                            onChange={this.handleFnameChange}
                            required />
                        <label for="lname" className="sr-only">Email address</label>
                        <input type='text' className='form-control' id='lname' placeholder='Enter Last Name' value={this.state.lname}
                            onChange={this.handleEmailChange}
                            required />
                        <label for="email" class="sr-only">Email address</label>
                        <input type='text' className='form-control' id='email' placeholder='Enter Email' value={this.state.email}
                            onChange={this.handleEmailChange}
                            required />
                        <label for="password" class="sr-only">Password</label>
                        <input type='text' className='form-control' id='password' placeholder='Enter Password' value={this.state.password}
                            onChange={this.handlePasswordChange}  required/>

                        <label for="gender" class="sr-only">Gender</label>
                        <input type='text' className='form-control' id='gender' placeholder='Enter Gender' value={this.state.gender}
                            onChange={this.handleGenderChange}
                            required />
                        <label for="phone" class="sr-only">Phone</label>
                        <input type='text' className='form-control' id='phone' placeholder='Enter Phone' value={this.state.phone}
                            onChange={this.handlePhoneChange}
                            required />

                        <button type='submit' className='btn btn-primary btn-lg btn-block'>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterForm;