import React, { Component } from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import { SocialIcon } from "react-native-elements";
// import { MDBIcon, MDBBtn } from "mdbreact";
import github from "./images/github.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.jpg";
import "./Footer.css";

export class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* column 1 */}
                        <div className="col">
                            <h4 className="head">Company</h4>
                            <ul className="list-unstyled">
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Use</li>
                                <li>Branding</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        {/* column 2 */}
                        <div className="col">
                            <h4 className="head">General</h4>
                            <ul className="list-unstyled">
                                <li>Partner With Us</li>
                                <li>Gift Card</li>
                                <li>Write To Us</li>
                                <li>Mobile App</li>
                                <li>SiteMap</li>
                            </ul>
                        </div>
                        {/* column 3 */}
                        <div className="col">
                            <h4 className="head">Speciality Pages</h4>
                            <ul className="list-unstyled">
                                <li>Amazon Pay Offers</li>
                                <li>Google Pay Offers</li>
                                <li>Phone Pay Offers</li>
                                <li>Bank Offers</li>
                                <li>Festival Offers</li>
                            </ul>
                        </div>
                        {/* column 4 */}
                        <div className="col">
                            <h4 className="head">More..</h4>
                            <ul className="list-unstyled">
                                <li>City Offers</li>
                                <li>Brand Offers</li>
                                <li>Product Deals</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="border" />
                    <div className="row">
                        <p className="col-sm" style={{ textAlign: "center" }}>
                            (©) Copyright 2020 Deals&Coupons. All Rights Reserved.
                        </p>
                    </div>
                    <div className="logos" style={{ marginLeft: "503px" }}>
                        <a href="https://enterprise.github.com/login">
                            <img
                                src={github}
                                height="25"
                                width="25"
                                style={{ backgroundColor: "dark" }}
                                alt="githublogo"
                            />
                        </a>
                        &nbsp;&nbsp;
                        <a href="https://twitter.com/login">
                            <img
                                src={twitter}
                                height="25"
                                width="25"
                                style={{ backgroundColor: "dark" }}
                                alt="twitterlogo"
                            />
                        </a>
                        &nbsp;&nbsp;
                        <a href="https://www.instagram.com/accounts/login">
                            <img
                                src={instagram}
                                height="25"
                                width="25"
                                style={{ backgroundColor: "dark" }}
                                alt="instagramlogo"
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;