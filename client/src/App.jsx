import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { useEffect, useState } from "react";
import NavBar from "./components/Navbars/NavBar";
import Footer from "./components/Footers/Footer";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import DashHome from "./pages/Dashboard/DashHome";

export default function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {

      setShowNavBar(false);
    } else {

      setShowNavBar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);


  return (
      <BrowserRouter>
        <div className={`fixed top-0 w-full z-50 transition-transform duration-300 ${showNavBar ? "translate-y-0" : "-translate-y-full"}`}>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/SignIn" element={<SignIn /> } />
          <Route path="/SignUp" element={<SignUp /> } />
          <Route path="/Dashboard/" element={<Dashboard /> } >
            <Route path="Home" element={<DashHome /> } />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}