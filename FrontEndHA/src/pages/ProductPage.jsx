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
        quantity: quantity,
        image: product.image,
      })
    );

    toast.success(`${product.name} agregado al carrito`, {
      position: "top-right",
      autoClose: 3000,
      onClick: () => navigate("/cart"),
    });
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // Obtener el producto específico
        const productResponse = await fetch(
          `http://localhost:3000/products/${id}`
        );
        if (!productResponse.ok) {
          throw new Error("Producto no encontrado");
        }
        const productData = await productResponse.json();
        setProduct(productData);

        // Obtener productos recomendados (misma categoría)
        const allProductsResponse = await fetch(
          "http://localhost:3000/products"
        );
        if (!allProductsResponse.ok) {
          throw new Error("No se pudieron cargar los productos recomendados");
        }
        const allProducts = await allProductsResponse.json();

        const recommended = allProducts
          .filter(
            (p) =>
              p.category === productData.category && p.id !== productData.id
          )
          .slice(0, 4);

        setRecommendedProducts(recommended);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading)
    return <div className="text-center py-5">Cargando producto...</div>;
  if (error)
    return <div className="text-center py-5 text-danger">Error: {error}</div>;
  if (!product)
    return <div className="text-center py-5">Producto no encontrado</div>;

  return (
    <div className="container py-4">
      <div className="row">
        {/* Imagen del producto */}
        <div className="col-md-6 mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Detalles del producto */}
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <h3 className="text-primary mb-3">
            ${product.price} / {product.unit}
          </h3>

          <div className="mb-4">
            <label>Cantidad ({product.unit}):</label>
            <input
              type="number"
              className="form-control my-2"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            {product.stock < 10 && (
              <small className="text-warning">
                Solo {product.stock} disponibles
              </small>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="btn btn-primary w-100 mb-2"
          >
            Agregar al carrito
          </button>
        </div>
      </div>

      {/* Descripción */}
      <div className="mt-4 p-3 bg-light rounded">
        <h4>Descripción</h4>
        <p>{product.description || "Sin descripción"}</p>
      </div>

      {/* Productos recomendados */}
      {recommendedProducts.length > 0 && (
        <div className="mt-5">
          <h4 className="mb-3">También te puede interesar</h4>
          <div className="row">
            {recommendedProducts.map((item) => (
              <div className="col-6 col-md-3" key={item.id}>
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
