import React from 'react'
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button} from 'react-bootstrap';
import logo from './images/logo_coupons.png'

function CouponsNav() {

    return (
        <div className="App">
           
                <Navbar expand="lg" variant="light" bg="white">
                    <Navbar.Brand href="/home">CouponsDeal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <NavDropdown.Item>Action</NavDropdown.Item>
                                <NavDropdown.Item>Another action</NavDropdown.Item>
                                <NavDropdown.Item>Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                
                            </NavDropdown> */}
                            <Nav.Link href="/categories">Categories</Nav.Link>
                            <Nav.Link href="/wishlist">Wishlist</Nav.Link>
                            <Nav.Link href="/news">News</Nav.Link>
                            <Nav.Link href="/about-us">About Us</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signup">Sign Up</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
           
        </div>
    )
}

export default CouponsNav
