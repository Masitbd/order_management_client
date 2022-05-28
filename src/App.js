import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tools from "./pages/Home/ItemReview";
import Login from "./pages/Login/Login";
import Footer from "./pages/Shared/Footer";
import SignUp from "./pages/Login/SignUp";
import ItemModal from "./pages/Product/ItemModal";
import ItemInfo from "./pages/Product/ItemInfo";
import RequireAuth from "./pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrder from "./pages/Dashboard/MyOrder";
import MyReview from "./pages/Dashboard/MyReview";
import Users from "./pages/Dashboard/Users";
import ItemReview from "./pages/Home/ItemReview";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="itemReview" element={<ItemReview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/itemInfo/:id"
          element={
            <RequireAuth>
              <ItemInfo />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder />} />
          <Route path="review" element={<MyReview />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/*  <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
