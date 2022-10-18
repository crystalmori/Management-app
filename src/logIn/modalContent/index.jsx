import Modal from "../../modal/index";
import "../../content/index";
import { FORM } from "../../content/index";

const LogIn = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSignIn = (email, password) => {
    const obj = {
      email,
      password,
    };
    console.log(obj);

    setEmailInput("");
    setPasswordInput("");
  };

  return (
    <>
      <Modal headerText={FORM.SIGNIN} handleAction={handleSignIn} />
    </>
  );
};

export default LogIn;
