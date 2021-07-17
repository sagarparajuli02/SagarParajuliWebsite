import React from "react";
import "./NavBar.css";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationMenu() {
  return (
    <div>
      <Navbar expand="sm" fixed="top" className="colorNab">
        <Navbar.Brand href="/">
          <h4>Sagar Parajuli</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link className="navbarLink" smooth to="#home">
            Home
          </Link>
          <Link className="navbarLink" smooth to="#about">
            About
          </Link>
          <Link className="navbarLink" smooth to="#portfolio">
            Portfolio
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationMenu;
