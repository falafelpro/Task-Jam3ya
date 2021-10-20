import React, { useState } from "react";
import { Navbar, Nav, NavItem, Container, Button } from "react-bootstrap";
import authenticationStore from "../Stores/authenticationStore";
import { observer } from "mobx-react";
import SignUpModal from "./SignUpModal";

function NavBar() {
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="header col-12 ">
      <Navbar
        className="brownred-halloween"
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="image-halloween"
              src="data:image/jpeg;base64,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"
            ></img>
          </Navbar.Brand>
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
                    <Button
                      className="button2-halloween "
                      onClick={() => authenticationStore.logOut()}
                    >
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
