import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
              <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Tech Mania</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link}  to="/blogs">Blogs</Nav.Link>
      <Nav.Link as={Link}  to="/home">Home</Nav.Link>
      <Nav.Link as={Link}  to="/login">Log In</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;