import React from "react";
import { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

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
            style={{ color: "#0000" }}
          >
            <span>
              <IoReorderThreeSharp
                style={{ color: "black", fontSize: "24px" }}
              />
            </span>
          </button>
        </div>
        <div
          className={`offcanvas offcanvas-start ${showOffcanvas ? "show" : ""}`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{
            visibility: showOffcanvas ? "visible" : "hidden",
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
            <ul className="navbar-nav text-start flex-grow-1 pe-3">
              <li className="nav-item" onClick={toggleOffcanvas}>
                <Link
                  to={"/"}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={toggleOffcanvas}>
                <Link to={"/products"} className="nav-link" href="#">
                  Catalogo
                </Link>
              </li>
              <li className="nav-item" onClick={toggleOffcanvas}>
                <Link to={"/cart"} className="nav-link" href="#">
                  Carrito
                </Link>
              </li>
              <li className="nav-item" onClick={toggleOffcanvas}>
                <Link to={"/about"} className="nav-link" href="#">
                  Sobre este proyecto
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Frutas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Verduras
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Destacados
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
              <button className="rounded-0" type="submit">
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
            <HiOutlineUser style={{ color: "black", fontSize: "24px" }} />
          </div>
          <div>
            <BsCart4 style={{ color: "black", fontSize: "24px" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
