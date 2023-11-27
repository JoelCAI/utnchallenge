import './header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react';
import { CgChevronDoubleLeft } from "react-icons/cg";
import { CgChevronDoubleRight } from "react-icons/cg";


const Header = () => {
    return (
        <Navbar expand="lg" className="bg-transparent bg-gradient shadow-lg p-3">
            <Container fluid>
                <Navbar.Brand className='text-warning fs-3 pe-3 fw-bold' href="/"><CgChevronDoubleRight />Equipo C<CgChevronDoubleLeft /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="d-flex"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link className='text-warning m-2 ms-5 fs-4 fst-italic ' href="personajes">Buscador de personaje</Nav.Link>
                        <Nav.Link className='text-warning m-2 fs-4 fst-italic' href="contacto">Sobre nosotros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
