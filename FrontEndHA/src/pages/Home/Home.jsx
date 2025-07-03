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
        <div className="recipe-frame-content p-4 ">
          {/* Receta con marco decorativo */}
          <div className="recipe-frame my-5">
            <div className="recipe-border text-center p-4">
              <h3 className="recipe-title">Receta del Día</h3>
              <p>
                <strong>Ingredientes:</strong>
              </p>
              <ul className="text-start mx-auto" style={{ maxWidth: "400px" }}>
                <li>2 tazas de harina</li>
                <li>1 huevo</li>
                <li>1/2 taza de leche</li>
              </ul>
              <p>
                <strong>Instrucciones:</strong>
              </p>
              <ol className="text-start mx-auto" style={{ maxWidth: "400px" }}>
                <li>Mezcla todos los ingredientes en un bol.</li>
                <li>Coloca en un molde y hornea por 30 minutos a 180°C.</li>
                <li>Sirve con un toque de miel o azúcar impalpable.</li>
              </ol>
              <img
                src="/zanahoria-deco.png"
                alt="Zanahoria decorativa"
                className="carrot-deco mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
