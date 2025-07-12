import { useState, useEffect } from "react";
import ProductCard from "../components/cards/ProductCard/ProductCard";
import GridSelector from "../components/layout/GridSelector";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error("Error al cargar los productos");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;
  if (products.length === 0) return <div>No hay productos disponibles</div>;

  return (
    <div className="catalogo container mt-0">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <h3 className="font-bolder">Nuestros Productos</h3>

        <div className="d-flex align-items-center">
          <GridSelector setColumns={setColumns} />
        </div>
      </div>

      <div className="row lista-productos mt-5 d-flex justify-content-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} columns={columns} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
