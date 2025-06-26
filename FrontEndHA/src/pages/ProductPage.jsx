import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/cards/ProductCard/ProductCard";
import { addToCart } from "../redux/cart/cartSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      })
    );

    toast(
      <div className="d-flex justify-content-center">
        <div>
          <p className="fw-bold mb-0">¡Agregado al carrito!</p>
          <p className="mb-0">{product.name}</p>
          <br />
          <p onClick={() => navigate("/cart")}>Ir al carrito</p>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        style: {
          borderLeft: "4px solid #28a745",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        },
      }
    );
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch del producto actual
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) throw new Error("Producto no encontrado");
        const data = await response.json();
        setProduct(data);

        const recommendedResponse = await fetch(
          `http://localhost:3000/products?category=${data.category}&_limit=4`
        );
        const recommendedData = await recommendedResponse.json();
        setRecommendedProducts(recommendedData.filter((p) => p.id !== data.id));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return <div className="text-center py-5">Cargando producto...</div>;
  if (error)
    return <div className="text-center py-5 text-danger">Error: {error}</div>;
  if (!product)
    return <div className="text-center py-5">Producto no encontrado</div>;

  return (
    <div className="font-inter text-dark d-flex flex-column">
      <main className="flex-grow-1 p-3 container-md mx-auto">
        <div className="bg-white d-flex flex-column flex-md-row justify-content-center p-4 p-md-5 mb-5">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3 p-md-4 mb-4 mb-md-0">
            <div
              className="position-relative w-100 bg-light d-flex justify-content-center align-items-center overflow-hidden"
              style={{ height: "400px" }}
            >
              <img
                src={
                  product.image ||
                  "https://placehold.co/600x600/E0E0E0/808080?text=IMAGEN+NO+DISPONIBLE"
                }
                alt={product.name}
                className="img-fluid h-100 w-100 object-fit-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x600/E0E0E0/808080?text=IMAGEN+NO+DISPONIBLE";
                }}
              />
              <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-center pb-3">
                <span
                  className="d-block me-2 bg-secondary"
                  style={{ width: "8px", height: "8px", borderRadius: "50%" }}
                ></span>
                <span
                  className="d-block me-2 bg-success"
                  style={{ width: "8px", height: "8px", borderRadius: "50%" }}
                ></span>
                <span
                  className="d-block bg-secondary"
                  style={{ width: "8px", height: "8px", borderRadius: "50%" }}
                ></span>
              </div>
              <button className="btn btn-sm btn-light position-absolute start-0 top-50 translate-middle-y ms-2 border-0">
                &lt;
              </button>
              <button className="btn btn-sm btn-light position-absolute end-0 top-50 translate-middle-y me-2 border-0">
                &gt;
              </button>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3 p-md-4 d-flex flex-column text-center">
            <div>
              <h1 className="display-5 fw-normal text-dark mb-2">
                {product.name.toUpperCase()}
              </h1>
              <p className="fs-3 fw-bold text-dark mb-2">
                ${product.price.toLocaleString("es-AR")} / {product.unit}
              </p>

              <div className="mb-5">
                <label
                  htmlFor="quantity"
                  className="d-block text-sm fw-semibold text-secondary mb-2"
                >
                  Cantidad ({product.unit}):
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="form-control w-auto d-inline-block px-3 py-2 border border-secondary transition-all"
                  value={quantity}
                  min="0.5"
                  step="0.5"
                  max={product.stock}
                  onChange={(e) => setQuantity(parseFloat(e.target.value))}
                />
                {product.stock < 10 && (
                  <small className="d-block text-warning mt-1">
                    Quedan sólo {product.stock} {product.unit} disponibles
                  </small>
                )}
              </div>
            </div>

            <div className="d-flex flex-column gap-3 mt-auto pt-4 border-top border-light">
              <button
                className="btn btn-success w-100 py-3 text-uppercase fw-semibold border-0 hover-darken"
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
              >
                {product.stock > 0 ? "Agregar al carrito" : "SIN STOCK"}
              </button>
              <a
                href="#"
                className="text-secondary text-sm text-center text-decoration-underline hover-darken-text"
              >
                Consulta por grandes cantidades
              </a>
            </div>
          </div>
        </div>

        <section className="bg-white p-4 p-md-5 mb-5">
          <h2 className="fs-3 fw-bold text-dark mb-4 border-bottom pb-2">
            Descripción del Producto
          </h2>
          <p className="text-secondary lh-lg mb-3">
            {product.description || "Descripción no disponible"}
          </p>
          {product.conservation && (
            <p className="text-secondary lh-lg">
              <strong>Conservación:</strong> {product.conservation}
            </p>
          )}
        </section>

        {recommendedProducts.length > 0 && (
          <section className="bg-white p-4 p-md-5">
            <h2 className="fs-3 fw-bold text-dark mb-5 text-center border-bottom pb-2">
              También te puede interesar
            </h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {recommendedProducts.map((product) => (
                <div className="col" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProductPage;
