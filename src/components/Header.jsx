import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import User from './User';

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar sticky="top" className="bg-white shadow-sm p-3 mb-3">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand to="/" as={NavLink}>
          Basketball Moments
        </Navbar.Brand>

        <Nav className="me-auto">
          <NavDropdown title="Search" id="navbarScrollingDropdown" style={{ fontSize: '18px' }}>
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

        {isAuthenticated ? (
          <>
            <Button
              to="/upload"
              as={NavLink}
              variant="success"
              className="d-flex align-items-center me-3"
              style={{ fontSize: '18px', height: '54px' }}
            >
              Upload
            </Button>

            <Dropdown>
              <Dropdown.Toggle className='d-flex align-items-center' variant="light" id="dropdown-basic">
                <User />
              </Dropdown.Toggle>
              
              <Dropdown.Menu>
                <Dropdown.Item>
                  <LogoutButton />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ) : (
          <LoginButton />
        )}

        {/* solo se mostrará si el user NO está login */}
      </Container>
    </Navbar>
  );
};

export default Header;
