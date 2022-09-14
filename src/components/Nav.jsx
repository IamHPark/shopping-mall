import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Nav.css'


export default function NavBar() {
    return (
    <Navbar variant="dark" collapseOnSelect className='nav-bar' expand="lg">

        <Navbar.Brand>
            <Link to="/" className="nav-link logo">SHOES MARKET</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Link to ="/" className="nav-link">Home</Link>
            <Link to ="/products" className="nav-link">Products</Link>
            <Link to ="/cart" className="nav-link">Cart</Link>
        </Nav>
        </Navbar.Collapse>

    </Navbar>
    )
}