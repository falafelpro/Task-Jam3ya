import React from "react";
import { Navbar, Nav, NavItem, Container } from "react-bootstrap";

function NavBar() {
  return (
    <div className="header col-12">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MLJ.co</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="Dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/">Login</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
