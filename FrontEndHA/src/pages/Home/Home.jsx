import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
  return (
    <div className="main-div container">
      {/* Hero */}
      <div className="hero-section position-relative text-center"></div>

      {/* Slider */}
      <div className="mt-5">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded shadow">
            <div className="carousel-item active">
              <img
                src="/Fotos ecocina/slider1.jpg"
                className="d-block w-100"
                alt="Imagen 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/Fotos ecocina/slider2.jpg"
                className="d-block w-100"
                alt="Imagen 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/Fotos ecocina/slider3.jpg"
                className="d-block w-100"
                alt="Imagen 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        className="recipe-frame-container my-5"
        style={{ maxWidth: "450px", margin: "0 auto" }}
      >
        <div className="recipe-frame-content p-4 position-relative">
          {/* Texto y contenido */}
          <h3>Receta del Día</h3>
          <p>
            <strong>Ingredientes:</strong>
          </p>
          <ul>
            <li>2 tazas de harina</li>
            <li>1 huevo</li>
            <li>1/2 taza de leche</li>
          </ul>
          <p>
            <strong>Instrucciones:</strong>
          </p>
          <ol>
            <li>Mezclá los ingredientes.</li>
            <li>Horneá 30 min a 180°C.</li>
          </ol>
          <img
            src="/images/zanahoria-deco.png"
            alt="Decoración"
            className="carrot-deco mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
