import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./pages/Modern/Navbar";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <Navbar/>
      <main className="py-3">
        <Outlet />
      </main>
      {/* <SignupFormDemo/> */}
    </>
  );
};

export default App;