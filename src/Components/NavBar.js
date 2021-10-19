import React, { useState } from "react";
import { Navbar, Nav, NavItem, Container, Button } from "react-bootstrap";
import authenticationStore from "../Stores/authenticationStore";
import { observer } from "mobx-react";
import SignUpModal from "./SignUpModal";

function NavBar() {
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="header col-12">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MLJ.co</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
              {/* {!authenticationStore.user && (
                <Nav.Link href="/signin">Login</Nav.Link>
              )}
            </Nav>
            <Nav>
              {authenticationStore.user && (
                <Nav.Link href="#deets">Logout</Nav.Link>
              )} */}
            </Nav>

            <Nav>
              {authenticationStore.user ? (
                <>
                  <li className="nav-item">
                    Hello {authenticationStore.user.username}
                  </li>
                  <li className="nav-item">
                    <Button onClick={() => authenticationStore.logOut()}>
                      Logout
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Button
                      onClick={() => {
                        setSignupIsOpen(true);
                        setSignIn(false);
                      }}
                    >
                      Sign up
                    </Button>
                  </li>
                  <li>
                    <Button
                      onClick={() => {
                        setSignupIsOpen(true);
                        setSignIn(true);
                      }}
                    >
                      Sign in
                    </Button>
                    <SignUpModal
                      signIn={signIn}
                      closeModal={() => setSignupIsOpen(false)}
                      isOpen={signupIsOpen}
                    />
                  </li>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default observer(NavBar);
