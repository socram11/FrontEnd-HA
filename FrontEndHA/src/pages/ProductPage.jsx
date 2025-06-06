import React from "react";
import ProductCard from "../components/cards/ProductCard";

const ProductPage = () => {
  const recommendedProducts = [
    {
      id: 1,
      imageUrl: "https://placehold.co/300x200?text=Lechuga+Criolla",
      title: "Lechuga Criolla",
      price: "$1.200,00/kg",
      isSoldOut: false,
    },
    {
      id: 2,
      imageUrl: "https://placehold.co/300x200?text=Cebolla+Morada",
      title: "Cebolla Morada",
      price: "$800,00/kg",
      isSoldOut: false,
    },
    {
      id: 3,
      imageUrl: "https://placehold.co/300x200?text=Papa+Negra",
      title: "Papa Negra",
      price: "$650,00/kg",
      isSoldOut: false,
    },
    {
      id: 4,
      imageUrl: "https://placehold.co/300x200?text=Zanahoria+Fresca",
      title: "Zanahoria Fresca",
      price: "$750,00/kg",
      isSoldOut: false,
    },
  ];

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
                src="https://placehold.co/600x600?text=Tomates+Perita+Frescos"
                alt="Tomates Perita Frescos"
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
                ></span>{" "}
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
                TOMATES PERITA FRESCOS
              </h1>
              <p className="fs-3 fw-bold text-dark mb-2">$1.500,00 / kg</p>

              <div className="mb-5">
                <label
                  htmlFor="quantity"
                  className="d-block text-sm fw-semibold text-secondary mb-2"
                >
                  Cantidad (kg):
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="form-control w-auto d-inline-block px-3 py-2 border border-secondary transition-all"
                  defaultValue="1"
                  min="0.5"
                  step="0.5"
                />
              </div>
            </div>

            <div className="d-flex flex-column gap-3 mt-auto pt-4 border-top border-light">
              <button className="btn btn-success w-100 py-3 text-uppercase fw-semibold border-0 hover-darken">
                AGREGAR AL PEDIDO
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
            Nuestros tomates perita son seleccionados a mano, directamente del
            productor. Son de cultivo sostenible, garantizando frescura y sabor
            inigualable para tus ensaladas, salsas o cualquier preparación
            culinaria.
          </p>
          <p className="text-secondary lh-lg">
            **Conservación:** Almacenar a temperatura ambiente hasta que
            maduren, luego refrigerar para prolongar su frescura. Consumir
            preferentemente en la primera semana.
          </p>
        </section>

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
      </main>
    </div>
  );
};

export default ProductPage;
