import { useState, useEffect } from "react";
import ProductCard from "../components/cards/ProductCard/ProductCard";
import GridSelector from "../components/layout/GridSelector";
import productsData from "../data/products.json"; // Importa directamente el JSON

function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    // Simulamos un pequeño retardo como si fuera una petición real
    const timer = setTimeout(() => {
      try {
        setProducts(productsData); // Usamos los datos importados directamente
      } catch (err) {
        setError("Error al cargar los productos locales");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 500); // Retardo de 0.5 segundos para simular carga

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;
  if (products.length === 0) return <div>No hay productos disponibles</div>;

  return (
    <div className="catalogo container mt-0">
      <div className="d-flex flex-row  justify-content-between">
        <h3 className="font-bolder">Nuestros Productos</h3>
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
