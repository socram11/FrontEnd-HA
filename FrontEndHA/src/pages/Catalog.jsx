import { useState, useEffect } from "react";
import ProductCard from "../components/cards/ProductCard/ProductCard";
import GridSelector from "../components/layout/GridSelector";
import productsData from "../data/products.json";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [error, setError] = useState(null);
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setProducts(productsData);
      } catch (err) {
        setError("Error al cargar los productos locales");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;
  if (products.length === 0) return <div>No hay productos disponibles</div>;

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="catalogo container mt-0">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <h3 className="font-bolder">Nuestros Productos</h3>

        <div className="d-flex align-items-center">
          <select
            className="form-select me-2"
            style={{ width: "150px" }}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">Ver todo</option>
            <option value="vegetables">Verduras</option>
            <option value="fruits">Frutas</option>
            <option value="protein">Granja</option>
            <option value="backery">Comida Casera</option>
          </select>

          <GridSelector setColumns={setColumns} />
        </div>
      </div>

      <div className="row lista-productos mt-5 d-flex justify-content-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} columns={columns} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
