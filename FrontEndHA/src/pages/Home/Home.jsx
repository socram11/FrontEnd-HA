
import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
  return (
 <div className="main-div backgroundimage border-top border-black border-bottom">

<div className="slider-heading text-center mt-5">
  <h2 className="slider-catchphrase">Sabores reales, ingredientes honestos</h2>
  <p className="slider-subtext">“Cociná con lo que la tierra te dá”</p>
</div>

      {/* SLIDER MODERNO CON TÍTULO */}
      <div className="modern-slider-container my-5">
  <div
    id="modernCarousel"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="4000"
  >
    <div className="carousel-inner rounded-4 shadow position-relative" style={{ height: "550px" }}>
      <div className="carousel-item active">
        <img
          src="/Fotos ecocina/slider1.jpg"
          className="d-block w-100 modern-slider-img"
          alt="Imagen 1"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5 className="slider-title">Cocina Natural</h5>
          <p className="slider-subtitle">Recetas frescas y caseras</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="/Fotos ecocina/slider2.jpg"
          className="d-block w-100 modern-slider-img"
          alt="Imagen 2"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5 className="slider-title">Sabores del Huerto</h5>
          <p className="slider-subtitle">Delicias con verduras</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="/Fotos ecocina/slider3.jpg"
          className="d-block w-100 modern-slider-img"
          alt="Imagen 3"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5 className="slider-title">Hecho en Casa</h5>
          <p className="slider-subtitle">Con ingredientes reales</p>
        </div>
      </div>
    </div>
  </div>
</div>

       

      {/* RECETA MODERNA */}
      <div className="recipe-frame-container my-5 d-flex justify-content-start">
        <div className="modern-recipe-card">
          <div className="left-decoration">
            
          </div>
          <div className="recipe-content">
            <div className="recipe-header d-flex justify-content-between align-items-center">
              <div>
                <h3 className="modern-title">Tarta de Verduras</h3>
                <p className="modern-subtitle">Receta casera con masa integral</p>
              </div>
              <div className="prep-time">
                <span className="time-label">⏱️</span>
                <span className="time-text">40 min</span>
              </div>
            </div>

            <div className="recipe-body">
              <p>Comenzamos con el relleno. Picamos y rallamos las verduras. En un bol ponemos el huevo y el queso crema y batimos.</p>
              <p>Sofritamos la cebolla hasta caramelizar, agregamos las verduras, revolvemos un poco y condimentamos con lo que más nos guste: sal, orégano y ajo molido. Dejamos dorar. Agregamos la mezcla de queso crema y huevo, revolvemos, retiramos del fuego y dejamos descansar.</p>
              <p>Para la masa: harina integral, sal y polvo de hornear en un bol. Agregamos aceite y agua poco a poco, amasamos hasta integrar.</p>
              <p>Estiramos la masa (3-4 mm), rellenamos, agregamos mozzarella y horneamos a 180 °C por 20-25 minutos.</p>
              <p><strong>¡Lista para disfrutar!</strong></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
