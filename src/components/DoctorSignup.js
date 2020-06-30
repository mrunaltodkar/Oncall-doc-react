import React, { Component } from 'react'
import axios from 'axios'
import "./DoctorSignUp.css"

export default class DoctorSignup extends Component {
    state = {
        email: '',
        password: '',
        doctorName: '',
        qualification: '',
        speciality: '',
        experience: '',
        fees: '',
        location: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8187/signup/doctor', {
            email: this.state.email,
            password: this.state.password,
            doctorName: this.state.doctorName,
            qualification: this.state.qualification,
            speciality: this.state.speciality,
            experience: this.state.experience,
            fees: this.state.fees,
            location: this.state.location
        })
            .then((res) => {
                this.props.history.push({
                    pathname: "/doctor-login",
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
            <div className="signup-form">
                <form onSubmit={this.handleSubmit} method="post">
                    <h2>Doctor Register</h2>
                    <p className="hint-text">Hi Doctor! Register yourself here. It's free and only takes a minute.</p>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your Email" value={this.state.email} onChange={this.handleChange} required="required" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Set your password" value={this.state.password} onChange={this.handleChange} required="required" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="doctorName" name="text" placeholder="Enter your Name" value={this.state.doctorName} onChange={this.handleChange} required="required" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="qualification" name="text" placeholder="Enter your Qualification" value={this.state.qualification} onChange={this.handleChange} required="required" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="speciality" name="text" placeholder="speciality" value={this.state.speciality} onChange={this.handleChange} required="required" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="experience" name="text" placeholder="experience" value={this.state.experience} onChange={this.handleChange} required="required" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="fees" name="number" placeholder="fees" value={this.state.fees} onChange={this.handleChange} required="required" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="location" name="text" placeholder="Enter your Address" value={this.state.location} onChange={this.handleChange} required="required" />
                    </div>
                    <div className="form-group">
                        <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="/signup">Terms of Use</a> &amp; <a href="/signup">Privacy Policy</a></label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                    </div>
                </form>
                <div className="text-center">Already have an account? <a href="/doctor-login">Sign in</a></div>
            </div>
        )
    }
} 