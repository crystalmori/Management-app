import "./App.css";

import SignInModal from "./components/SignInModal";

function App() {
  // const [show, setShow] = useState(false);
  return (
    <div className="App">
      {/* <button onClick={() => setShow(true)}>Show Modal</button> */}
      {/* <SignIn /> */}
      {/* <Modal show={show} /> */}
      <SignInModal />
    </div>
  );
}

export default App;
