import './header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react';


const Header = () => {
    return (
        <Navbar expand="lg" className="bg-primary">
            <Container fluid>
                <Navbar.Brand className='text-light' href="/">Equipo C</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="d-flex"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link className='text-light' href="personajes">Personaje</Nav.Link>
                        <Nav.Link className='text-light' href="contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
