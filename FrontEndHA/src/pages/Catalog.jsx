import { useState, useEffect } from "react";
import ProductCard from "../components/cards/ProductCard";
import GridSelector from "../components/layout/GridSelector";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products");

        setProducts(response.data);
      } catch (err) {
        setError(
          err.response?.status
            ? `Error HTTP: ${err.response.status}`
            : err.message
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;
  if (products.length === 0) return <div>No hay productos disponibles</div>;

  return (
    <div className="catalogo container">
      <div className="d-flex flex-row  justify-content-between">
        <h3>Nuestros Productos</h3>
        <GridSelector setColumns={setColumns} />
      </div>
      <div className="row lista-productos mt-5  d-flex justify-content-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} columns={columns} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
