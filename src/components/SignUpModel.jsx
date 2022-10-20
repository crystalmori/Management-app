import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import "../styles/modal.css";

const SignUpModal = () => {
  const [show, setShow] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSignIn = () => {
    setEmailInput("");
    setPasswordInput("");
  };
  const handleSignUp = () => {
    setShow(false);
    setShowSignUp(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Sign in to your account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="you@example.com"
                autoFocus
                value={emailInput}
                onChange={(event) => setEmailInput(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={passwordInput}
                onChange={(event) => setPasswordInput(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="sign-in-button"
            variant="primary"
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <p>
            Don't have an account? <a onClick={() => {}}>Sign up</a>
          </p>
          <a onClick={() => {}}>Forget password</a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUpModal;
