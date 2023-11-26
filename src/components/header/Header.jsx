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
                <Navbar.Brand className='text-light' href="#">Equipo C</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link className='text-light' href="#action1">Personaje</Nav.Link>
                        <Nav.Link className='text-light' href="#action2">Contacto</Nav.Link>
                        <NavDropdown title="Personajes" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Por ID</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Por Categoría
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Por Clase
                        </NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Link href="#" disabled>
                        Navegar
                        </Nav.Link> */}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="buscar"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button className='text-light' variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
    )
}

export default Header;
