import React from "react";
import "./header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import car from "../../../assets/images/Main_Logo.png";

const Header = () => {
  return (
    <>
      <Navbar className="main-navbar border-bottom" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={car} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/search">
                <button className="header-btn">Find Your Partner</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
