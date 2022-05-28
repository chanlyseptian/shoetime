import { Navbar, Login, Register, LandingPage, Icons } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Icons />
        <LandingPage/>
      </div>
    </Router>
  );
}

export default App;
