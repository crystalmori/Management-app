import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import "../styles/modal.css";

const SignInModal = () => {
  const [show, setShow] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSignIn = () => {
    const obj = {
      email: emailInput,
      password: passwordInput,
    };
    console.log(obj);

    setEmailInput("");
    setPasswordInput("");
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
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignInModal;