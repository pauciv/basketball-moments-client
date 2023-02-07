import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar sticky="top" className="bg-white shadow-sm p-3 mb-3">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand to="/" as={NavLink}>
          Basketball Moments
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Search" id="navbarScrollingDropdown">
            {/* make a loop of the categories */}
            <NavDropdown.Item to="/">Three Pointers</NavDropdown.Item>
            <NavDropdown.Item to="/">Dunks</NavDropdown.Item>
            <NavDropdown.Item to="/">Celebrations</NavDropdown.Item>
            <NavDropdown.Item to="/">Funny</NavDropdown.Item>
            <NavDropdown.Item to="/">Amazing</NavDropdown.Item>
            <NavDropdown.Item to="/">Ridiculous</NavDropdown.Item>
            <NavDropdown.Item to="/">Nonsense</NavDropdown.Item>
            <NavDropdown.Item to="/">Kids</NavDropdown.Item>
            <NavDropdown.Item to="/">Animated</NavDropdown.Item>
          </NavDropdown>
          {/* si está loguedado mostramos el avatar y el username */}
        </Nav>
        <Button to="/upload" as={NavLink} className='me-3'>
          Upload
        </Button>
        <Button to="/login" as={NavLink} variant="outline-primary">
          Login
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
