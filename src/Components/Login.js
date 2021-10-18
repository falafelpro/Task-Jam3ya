import React from "react";
import SignUpModal from "./SignUpModal";
import { useState } from "react";
import SignIn from "./SignIn";

function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div className="container">
      <SignIn />
      <button onClick={openModal}>Sign Up</button>
      <SignUpModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default Login;
