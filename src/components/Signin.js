import React, { Component } from 'react'
import axios from 'axios'
import "./Signin.css"
import CouponsNav from './CouponsNav'

export default class Signin extends Component {
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
        e.preventDefault();
        axios.post('http://localhost:8085/signIn', {
            email: this.state.email,
            password: this.state.password
        }).then((res) => {
            //console.log(res);
            //console.log(res.data);
            // <CouponsNav history={this.props.history} />
            this.props.history.push({
                pathname: "/welcome",
                state: { data: res.data }
            })
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
            <div className="login-form">
                <form onSubmit={this.handleSubmit} method="post">
                    <h2 className="text-center">Sign in</h2>
                    <div className="text-center social-btn">
                        <a href="https://www.facebook.com/login/device-based/regular/login" className="btn btn-primary btn-block"><i className="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
                        <a href="https://github.com/login" className="btn btn-info btn-block"><i className="fa fa-github"></i> Sign in with <b>Github</b></a>
                        <a href="https://accounts.google.com/signin" className="btn btn-danger btn-block"><i className="fa fa-google"></i> Sign in with <b>Google</b></a>
                    </div>
                    <div className="or-seperator"><i>or</i></div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <input className="form-control" type="email" id="email" name="email" placeholder="Enter your Email" value={this.state.email} onChange={this.handleChange} required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input className="form-control" type="password" id="password" name="password" placeholder="Enter your password" value={this.state.password} onChange={this.handleChange} required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block login-btn">Sign in</button>
                    </div>
                    <div className="clearfix">
                        <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                        <a href="/login" className="pull-right text-success">Forgot Password?</a>
                    </div>

                </form>
                <div className="hint-text small">Don't have an account? <a href="/signup" className="text-success">Register Now!</a></div>
            </div>
        )
    }
}