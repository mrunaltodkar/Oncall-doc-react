import React from 'react';
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap';
//import { connect } from 'react-redux';
//import PropTypes from 'prop-types';

class CouponsNav extends React.Component {
    render() {
        // const { isAuthenticated } = this.props.auth;

        // const userLinks = {

        // };

        // const guestLinks = {

        // }
        return (
            <div className="App">
                <Navbar expand="lg" variant="light" bg="white">
                    <Navbar.Brand href="/home">CouponsDeal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav className="mr-auto" style={{marginLeft:170}} >
                            <Nav.Link href="/categories">Categories</Nav.Link>
                            <Nav.Link href="/wishlist">Wishlist</Nav.Link>
                            <Nav.Link href="/doctors">Doctors</Nav.Link>
                            <Nav.Link href="/news">News</Nav.Link>
                            <Nav.Link href="/about-us">About Us</Nav.Link>
                            <NavDropdown title="Login" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/login">User Login</NavDropdown.Item>
                                <NavDropdown.Item href="/doctor-login">Doctor Login</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <NavDropdown title="Sign Up" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/signup">User Registration</NavDropdown.Item>
                                <NavDropdown.Item href="/doctor-signup">Doctor Registration</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

// CouponsNav.propTypes = {
//     auth: PropTypes.object.isRequired
// }

// function mapStateToProps(state){
//     return{
//         auth: state.auth
//     };
// }

// export default connect(mapStateToProps)(CouponsNav);
export default CouponsNav;