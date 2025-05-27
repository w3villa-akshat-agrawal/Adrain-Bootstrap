import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../styles/AdrianNav.css"; // Assuming you have a CSS file for styles
const AdrianNav = () => {
 return (
    <div className='conatiner-fluid py-md-3 px-md-2  py-1 px-1 '>
     <Navbar expand="lg" className=" AdrianNavbar w-75 m-auto">
  <Container>
    <Navbar.Brand className='text-center logo' href="#home"><img className='' src="logo.png" alt="adrian" /></Navbar.Brand>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Navbar.Collapse className='toggler' id="basic-navbar-nav">
      <Nav className=" ms-auto">
        <Nav.Link href="#home" className='text-danger px-3 menu '>Home</Nav.Link>
        <Nav.Link href="#link" className='px-3 menu'>About us </Nav.Link>
        <Nav.Link href="#link" className='px-3 menu'>Page</Nav.Link>
        <Nav.Link href="#link" className='px-3 menu'>Shop</Nav.Link>
        <Nav.Link href="#link" className='px-3 menu'>About us </Nav.Link>
   <Nav.Link as={Link} to="/contact" className='px-3 menu'>Contact Us</Nav.Link>
      </Nav>
       <Nav className="ms-auto">
      <Nav.Link href="#home">
  <div className="bg-secondary rounded-circle px-2 py-1 d-flex align-items-center justify-content-center btn" >
    <i className="ri-search-line text-white "></i>
  </div>
</Nav.Link>
        <Nav.Link href="#link">   <div className="bg-secondary rounded-circle px-2 py-1 d-flex align-items-center justify-content-center btn" >
    <i className="ri-login-box-line text-white "></i> 
  </div></Nav.Link>
        <Nav.Link href="#link">   <div className="bg-secondary rounded-circle px-2 py-1 d-flex align-items-center justify-content-center btn" >
    <i className="ri-shopping-cart-line text-white "></i>
  </div></Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default AdrianNav