import React, { Component } from 'react'
import axios from 'axios'
import "./DoctorLogin.css"

export default class DoctorLogin extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log(this.state.email)
        console.log(this.state.password)
        e.preventDefault();
        axios.post('http://localhost:8187/signin/doctor', {
            email: this.state.email,
            password: this.state.password
        }).then((res) => {
            console.log(res);
            //console.log(res.dat);
            this.props.history.push('/doctors')
        })
            .catch((err) => {
                console.log(err);
            })
    }
    // componentDidMount() {
    //     axios.get('http://localhost:8085/signIn').then(res => {
    //         this.setState({
    //             user: res.data
    //         });
    //     });
    // }

    navStyle = {
        color: 'rgb(14, 13, 13)'
    }

    render() {
        return (
            <div class="login-form">
    <form onSubmit={this.handleSubmit} >
        <h2 class="text-center">Doctor Login</h2>		
        <div class="text-center social-btn">
            <a href="https://www.facebook.com/login/device-based/regular/login" class="btn btn-primary btn-block"><i class="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
            <a href="https://github.com/login" class="btn btn-info btn-block"><i class="fa fa-github"></i> Sign in with <b>Github</b></a>
			<a href="https://accounts.google.com/signin" class="btn btn-danger btn-block"><i class="fa fa-google"></i> Sign in with <b>Google</b></a>
        </div>
		<div class="or-seperator"><i>or</i></div>
        <div class="form-group">
        	<div class="input-group">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input class="form-control" type="email" id="email" name="email" placeholder="Enter your Email" value={this.state.email} onChange={this.handleChange} required="required" />
            </div>
        </div>
		<div class="form-group">
            <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input class="form-control" type="password" id="password" name="password" placeholder="Enter your password" value={this.state.password} onChange={this.handleChange} required="required" />
            </div>
        </div>        
        <div class="form-group">
            <button type="submit" class="btn btn-success btn-block login-btn">Sign in</button>
        </div>
        <div class="clearfix">
            <label class="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
            <a href="/doctor-login" class="pull-right text-success">Forgot Password?</a>
        </div>  
        
    </form>
    <div class="hint-text small">Don't have an account? <a href="/doctor-signup" class="text-success">Register Now!</a></div>
</div>
        )
    }
}