import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbar1 = () => {
  return (
    <div className='container-fluid'>

         <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand className='fs-1' href="#home"><img src="logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link className='border-bottom border-danger' href="#link">contact</Nav.Link>
            <Nav.Link href="#link">profile</Nav.Link>
          </Nav>
        
        </Navbar.Collapse> 
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbar1