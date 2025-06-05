import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog";
import AboutThisProyect from "./pages/AboutThisProyect";
import Login from "./pages/Login";

import Checkout from "./pages/Checkout";
import MovingText from "./components/animations/MovingText";
import NavBar from "./components/layout/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="navbar-styles">
          <MovingText />
          <NavBar />
        </div>
        <Routes>
          <Route path="/about" element={<AboutThisProyect />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Catalog />} />
        </Routes>
      </Router>{" "}
      <Footer />
    </>
  );
}

export default App;
