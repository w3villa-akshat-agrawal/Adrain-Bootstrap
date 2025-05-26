import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const AdrianNav = () => {
 return (
    <div className='conatiner-fluid  py-3 px-2'>
     <Navbar expand="lg" className=" w-75 m-auto">
  <Container>
    <Navbar.Brand className='text-center' href="#home"><img className='' src="logo.png" alt="adrian" /></Navbar.Brand>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className=" ms-auto">
        <Nav.Link href="#home" className='text-danger px-3'>Home</Nav.Link>
        <Nav.Link href="#link" className='px-3'>About us </Nav.Link>
        <Nav.Link href="#link" className='px-3'>Page</Nav.Link>
        <Nav.Link href="#link" className='px-3'>Shop</Nav.Link>
        <Nav.Link href="#link" className='px-3'>About us </Nav.Link>
   <Nav.Link as={Link} to="/contact" className='px-3'>Contact Us</Nav.Link>
      </Nav>
       <Nav className="ms-auto">
      <Nav.Link href="#home">
  <div className="bg-secondary rounded-circle px-2 py-1 d-flex align-items-center justify-content-center" >
    <i className="ri-search-line text-white"></i>
  </div>
</Nav.Link>
        <Nav.Link href="#link">   <div className="bg-secondary rounded-circle px-2 py-1 d-flex align-items-center justify-content-center" ><i class="ri-shopping-cart-2-line text-white"></i></div></Nav.Link>
        <Nav.Link href="#link">   <div className="bg-secondary rounded-circle px-2 py-1 d-flex align-items-center justify-content-center" ><i class="ri-account-circle-2-line text-white"></i></div></Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default AdrianNav