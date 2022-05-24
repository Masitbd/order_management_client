import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tools from "./pages/Home/Tools";
import Login from "./pages/Login/Login";
import Footer from "./pages/Shared/Footer";
import SignUp from "./pages/Login/SignUp";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tools" element={<Tools />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      {/*  <Footer /> */}
    </div>
  );
}

export default App;
