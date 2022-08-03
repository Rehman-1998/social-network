import React from "react";
import "./header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Main_Logo.png";

const Header = () => {
  return (
    <>
      <Navbar className="main-navbar border-bottom" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/my-profile">My Profile</Nav.Link>
              <Nav.Link href="/search">Find My Partner</Nav.Link>
              <Nav.Link href="/results">Results</Nav.Link>
              <Nav.Link href="/">Book Now</Nav.Link>
              {/* <Link to="/my-profile">
                <button className="header-btn">My Profile</button>
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
