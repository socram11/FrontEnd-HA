import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import MovingText from "./components/animations/MovingText";
import NavBar from "./components/layout/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <MovingText />
      <NavBar />
      <Home />
    </>
  );
}

export default App;
