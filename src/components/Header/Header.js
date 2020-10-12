import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import logo from './Logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
         <Navbar  expand="lg">
            <Navbar.Brand href="#home"> <img src={logo} />  </Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
            </Form>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Link to="/Home"><Nav.Link href="#home"> Home</Nav.Link></Link>
                <Link to="/booking"><Nav.Link href="#home">Booking</Nav.Link></Link>
                <Link to="/hotel"><Nav.Link href="#home">Hotel Rooms</Nav.Link></Link>
                <Nav.Link href="#home">Contact</Nav.Link>
                <Link to="/login"><Button variant="warning">Log In</Button></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default Header;