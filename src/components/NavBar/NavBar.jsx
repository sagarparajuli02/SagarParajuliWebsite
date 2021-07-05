import React from 'react'
import './NavBar.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
  
function NavigationMenu() {
    return (
       <div>
   <Navbar  expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav  style={{color:"#fff"}} className="mr-auto">
      <Nav.Link  href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
      </div>
    )
}

export default NavigationMenu
