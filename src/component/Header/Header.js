import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../_firebase.init';

const Header = () => {
    const [user] =useAuthState(auth)

    const handleSignOut = () =>{
        signOut(auth)
    }
    return (
        <div>
              <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Tech Mania</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link as={Link}  to="/home">Home</Nav.Link>
      <Nav.Link as={Link}  to="/blogs">Blogs</Nav.Link>
      {
        user?
        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button> :
        <Nav.Link as={Link}  to="/login">Log In</Nav.Link>
      }
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;