import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ width: "100%" }} className="bg-light text-dark py-5 mt-5">
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-12">
            <h5 className="fw-bold">E-COCINA</h5>
          </div>
          <div className="col-md-6 mt-3">
            <input
              type="email"
              className="form-control border-0 border-bottom rounded-0 text-center"
              placeholder="Tu consulta"
            />
          </div>
        </div>

        <div className="row text-center text-md-start mt-5 d-flex">
          <div className="col-md-4 mb-3 text-center">
            <h6 className="fw-bold">AYUDA</h6>
            <ul className="list-unstyled">
              <li>Lorem ipsum dolor</li>
              <li>Sit amet</li>
              <li>Consectetur</li>
            </ul>
          </div>
          <div className="col-md-4 mb-3 text-center">
            <h6 className="fw-bold">INFO</h6>
            <ul className="list-unstyled">
              <li>Lorem ipsum</li>
              <li>Dolor sit</li>
            </ul>
          </div>
          <div className="col-md-4 mb-3 text-center">
            <h6 className="fw-bold">CONTACTO</h6>
            <p>000 00 00</p>
            <p>Montevideo, Uruguay</p>
          </div>
        </div>

        <div className="text-center mt-4">
          <a href="#" className="text-dark mx-2 fs-5 icon-hover">
            <FaInstagram />
          </a>
          <a href="#" className="text-dark mx-2 fs-5 icon-hover">
            <FaFacebookF />
          </a>
          <a href="#" className="text-dark mx-2 fs-5 icon-hover">
            <FaYoutube />
          </a>
          <a href="#" className="text-dark mx-2 fs-5 icon-hover">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
