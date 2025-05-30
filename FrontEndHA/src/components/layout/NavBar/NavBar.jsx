import React from "react";
import { useState } from "react";

import { IoReorderThreeSharp } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { BsCart4 } from "react-icons/bs";
import MovingText from "../../animations/MovingText";

const NavBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };
  return (
    <>
      <div className="d-flex justify-content-between vw-100 align-center fixed-top mt-4 mb-5 px-5">
        <div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleOffcanvas}
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            style={{ color: "#0000" }} // Hace el icono negro
          >
            <span>
              <IoReorderThreeSharp
                style={{ color: "black", fontSize: "24px" }}
              />
            </span>
          </button>
        </div>
        {/* Offcanvas Menu (ahora desde la izquierda) */}
        <div
          className={`offcanvas offcanvas-start ${showOffcanvas ? "show" : ""}`} // Cambiado a offcanvas-start
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{
            visibility: showOffcanvas ? "visible" : "hidden",
            // Estilos adicionales para mejor visualización
            backgroundColor: "#f8f9fa",
            borderRight: "1px solid #dee2e6",
          }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menú
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={toggleOffcanvas}
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Enlace
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Opciones
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Acción 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Acción 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Otra cosa
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
        <div className="text-black" style={{ width: "140px" }}>
          <img src="logo.svg" alt="" className="img-fluid w-100" />
        </div>
        <div className="d-flex justify-content-between align-center">
          <div>
            <HiOutlineUser style={{ color: "black", fontSize: "2rem" }} />
          </div>
          <div>
            <BsCart4 style={{ color: "black", fontSize: "2rem" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
