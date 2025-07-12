import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerbackground text-light py-5 elegant-footer border-top border-dark">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="footer-brand mb-3">ECO-CINA</h2>
          <input
            type="email"
            className="form-control footer-input mx-auto"
            placeholder="Recibí novedades, recetas y más..."
          />
        </div>

        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4">
            <h6 className="footer-title">INFORMACIÓN</h6>
            <ul className="footer-list">
              <li><Link to="/products" className="footer-link">Productos</Link></li>
              <li><Link to="/cart" className="footer-link">Mis compras</Link></li>
              <li><Link to="/" className="footer-link">Inicio</Link></li>
              <li><Link to="/login" className="footer-link">Loguearme</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="footer-title">SOBRE NOSOTROS</h6>
            <ul className="footer-list">
              <li><Link to="/about" className="footer-link">Conocé nuestra historia</Link></li>
              <li><Link to="/about" className="footer-link">Quiénes somos</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="footer-title">CONTACTO</h6>
            <p className="mb-1">+598 98 765 432</p>
            <p className="uru">Uruguay</p>
          </div>
        </div>

        <div className="text-center mt-4">
          <a href="#" className="footer-icon"><FaInstagram /></a>
          <a href="#" className="footer-icon"><FaFacebookF /></a>
          <a href="#" className="footer-icon"><FaYoutube /></a>
          <a href="#" className="footer-icon"><FaTiktok /></a>
        </div>

        <p className="text-center mt-4 small text-muted">
          © 2025 ECO-CINA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
