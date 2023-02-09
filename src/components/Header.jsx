import { useState } from 'react';
import {
  Button,
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import User from './User';
import categories from '../utils/categories';

const Header = ({ setCategoryFilter }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar sticky="top" className="bg-white shadow-sm p-3 mb-3">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand to="/" as={NavLink} onClick={() => setCategoryFilter()}>
          Basketball Moments
        </Navbar.Brand>

        <Nav className="me-auto">
          <NavDropdown
            title="Search"
            id="navbarScrollingDropdown"
            style={{ fontSize: '18px' }}
          >
            {categories.map((category) => (
              <NavDropdown.Item
                to="/"
                onClick={() => setCategoryFilter(category)}
                key={Math.floor(Math.random() * 1000000) + 1}
              >
                {category}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>

        {isAuthenticated ? (
          <>
            <Button
              to="/upload"
              as={NavLink}
              className="d-flex align-items-center me-3"
              style={{ fontSize: '18px' }}
            >
              Upload
            </Button>

            <Dropdown>
              <Dropdown.Toggle
                className="d-flex align-items-center"
                variant="light"
                id="dropdown-basic"
              >
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
