import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tools from "./pages/Home/Tools";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tools" element={<Tools />} />
      </Routes>
    </div>
  );
}

export default App;
