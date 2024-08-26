import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">MBC</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/careers">Careers</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          {!token ? (
            <>
              <Button as={Link} to="/login" variant="outline-primary" className="ml-2">Login</Button>&nbsp;
              <Button as={Link} to="/signup" variant="primary" className="ml-2">Sign Up</Button>
            </>
          ) : (
            <Button onClick={handleLogout} variant="outline-danger" className="ml-2">Logout</Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
