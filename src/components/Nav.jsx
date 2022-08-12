import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
    <Navbar bg="dark" variant="dark" className='nav-bar'>
        <Container>
        <Navbar.Brand href="#home" className=''>Shoes Market</Navbar.Brand>
        <Nav className="me-auto">
            <Link to ="/" className="nav-link">Home</Link>
            <Link to ="/detail" className="nav-link">Products</Link>
        </Nav>
        </Container>
    </Navbar>
    )
}