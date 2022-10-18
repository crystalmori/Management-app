import "./App.css";

import SignInModal from "./components/SignInModal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogIn from "./logIn/modalContent";

function App() {
  // const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Header />
      {/* <SignInModal /> */}
      <LogIn />
      <Footer />
    </div>
  );
}

export default App;
