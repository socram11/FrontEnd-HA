import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog";
import AboutThisProyect from "./pages/AboutThisProyect/AboutThisProyect";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ProductPage from "./pages/ProductPage";
import UserPage from "./pages/UserPage";
import Footer from "./components/layout/Footer/Footer";
import Checkout from "./pages/Checkout";
import NotFoundPage from "./pages/NotFoundPage";
import MovingText from "./components/animations/MovingText";
import NavBar from "./components/layout/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
      <Router>
        <div className="navbar-styles">
          <MovingText />
          <NavBar />
        </div>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/about" element={<AboutThisProyect />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/user-page" element={<UserPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Catalog />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

