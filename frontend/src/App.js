import { Navbar, Login, Register, LandingPage, Icons } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Icons />
        <LandingPage/>

        

      </>
    </Router>
  );
}

export default App;
