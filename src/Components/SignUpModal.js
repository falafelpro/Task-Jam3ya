import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import authenticationStore from "../Stores/authenticationStore";
export default function SignUpModal(props) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.signIn
      ? authenticationStore.logging(user, "signin")
      : authenticationStore.logging(user, "signup");
    props.closeModal();
  };
  return (
    <Modal
      show={props.isOpen}
      onHide={props.closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="username"
              placeholder="Enter your username"
            />
          </Form.Group>
          {!props.signIn && (
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={handleChange}
                name="email"
                placeholder="Enter your email"
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="Enter your password"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={handleSubmit}>
          {props.signIn ? "Sign in" : "Sign up"}{" "}
        </Button>
        <Button variant="warning" onClick={props.closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
