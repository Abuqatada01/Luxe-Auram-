import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../src/pages/Modern/Navbar"
import Sidebar from "./pages/Modern/Sidebard";

const App = () => {
  return (
    <>
      {/* <ToastContainer />
      <Navbar/>
      <Navigation />
      <main className="py-3">
        <Outlet />
      </main> */}
      <Sidebar/>
    </>
  );
};

export default App;