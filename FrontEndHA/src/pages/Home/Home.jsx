import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard/ProductCard";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error("Error al cargar productos");
        }
        const products = await response.json();

        const recommended = products
          .filter((p) => p.category === "vegetables")
          .slice(0, 4);

        setRecommendedProducts(recommended);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedProducts();
  }, []);

  if (loading)
    return (
      <div className="text-center py-5">Cargando productos recomendados...</div>
    );
  if (error)
    return <div className="text-center py-5 text-danger">Error: {error}</div>;

  return (
    <div className="main-div backgroundimage border-top border-black border-bottom ">
      {/* SLIDE */}
      <div className="mx-5">
        <div className="hero-slider-container my-5">
          <div className="hero-slider-content d-flex align-items-center justify-content-center ">
            <div className="overlay"></div>
            <h1 className="hero-slider-text">
              Sabores reales,
              <br />
              ingredientes honestos
            </h1>
          </div>
        </div>
      </div>
      {/* RECETA */}
      <div className="recipe-frame-container my-5 d-flex justify-content-start mx-5">
        <div className="modern-recipe-card">
          <div className="left-decoration"></div>
          <div className="recipe-content">
            <div className="recipe-header d-flex justify-content-between align-items-center">
              <div>
                <h3 className="modern-title">Tarta de Verduras</h3>
                <p className="modern-subtitle">
                  Receta casera con masa integral
                </p>
              </div>
              <div className="prep-time">
                <span className="time-label">⏱️</span>
                <span className="time-text">40 min</span>
              </div>
            </div>
            <div className="recipe-body">
              <p>
                Comenzamos con el relleno. Picamos y rallamos las verduras. En
                un bol ponemos el huevo y el queso crema y batimos.
              </p>
              <p>
                Sofritamos la cebolla hasta caramelizar, agregamos las verduras,
                revolvemos un poco y condimentamos con lo que más nos guste:
                sal, orégano y ajo molido. Dejamos dorar. Agregamos la mezcla de
                queso crema y huevo, revolvemos, retiramos del fuego y dejamos
                descansar.
              </p>
              <p>
                Para la masa: harina integral, sal y polvo de hornear en un bol.
                Agregamos aceite y agua poco a poco, amasamos hasta integrar.
              </p>
              <p>
                Estiramos la masa (3-4 mm), rellenamos, agregamos mozzarella y
                horneamos a 180 °C por 20-25 minutos.
              </p>
              <p>
                <strong>¡Lista para disfrutar!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTOS RECOMENDADOS */}
      {recommendedProducts.length > 0 && (
        <div className="my-5 mx-5">
          <h4 className="mb-4 text-center fw-bold">Productos recomendados</h4>
          <div className="row justify-content-center">
            {recommendedProducts.map((item) => (
              <div className="col-6 col-md-3 mb-4" key={item.id}>
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
