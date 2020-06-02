import React, { Component } from 'react'
import Logog from './images/logo_coupons.png'
import axios from 'axios'
import "./Signup.css"

export default class Signup extends Component {
    state = {
        username: '',
        number: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8085/signUp', {
            username: this.state.username,
            number: this.state.number,
            email: this.state.email,
            password: this.state.password
        })
            .then((res) => {
                this.props.history.push({
                    pathname: "/login",
                    state: { data: res.data }
    
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }


    navStyle = {
        color: 'rgb(14, 13, 13)'
    }

    render() {
        return (
            <div class="signup-form">
                <form onSubmit={this.handleSubmit} method="post">
                    <h2>Register</h2>
                    <p class="hint-text">Create your account. It's free and only takes a minute.</p>
                    <div class="form-group">
                        <input type="text" class="form-control" id="username" name="text" placeholder="Enter your Name" value={this.state.username} onChange={this.handleChange} required="required" />
                    </div>
                    <div class="form-group">
                        <input  type="tel" class="form-control" id="number" name="number" placeholder="Enter your Mobile number" value={this.state.number} onChange={this.handleChange} required="required" />
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="email" name="email" placeholder="Enter your Email" value={this.state.email} onChange={this.handleChange} required="required" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="password" name="password" placeholder="Set your password" value={this.state.password} onChange={this.handleChange} required="required" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="password" name="password" placeholder="Confirm Password" required="required" />
                    </div>
                    <div class="form-group">
                        <label class="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="/signup">Terms of Use</a> &amp; <a href="/signup">Privacy Policy</a></label>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
                    </div>
                </form>
                <div class="text-center">Already have an account? <a href="/login">Sign in</a></div>
            </div>
        )
    }
} 