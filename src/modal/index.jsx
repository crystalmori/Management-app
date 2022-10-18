import { Modal } from "react-bootstrap";

const MyModal = ({ headerText, handleAction }) => {
  const [show, setShow] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <Modal headerText={headerText}>
      <Modal.Header className="modal-header" closeButton>
        <Modal.Title>{headerText}</Modal.Title>
      </Modal.Header>

      <Modal.body>
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
      </Modal.body>

      <Modal.Footer>
        <Button
          className="sign-in-button"
          variant="primary"
          onClick={handleAction}
        >
          {footerButtonContent}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
