import { Navbar, Login, Register, LandingPage, Icons } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Icons />

        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>

          <Route path="login" element={<Login />}></Route>

          <Route path="register" element={<Register />}></Route>

          
        </Routes>

      </>
    </Router>
  );
}

export default App;
