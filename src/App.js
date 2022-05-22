import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tools from "./pages/Home/Tools";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tools" element={<Tools />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
