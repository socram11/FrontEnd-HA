import React from "react";
import ProductCard from "../components/cards/ProductCard";

const ProductPage = () => {
  return (
    <div className="  font-inter text-gray-800">
      <div className="  p-4 ">
        <div className="bg-white d-flex justify-content-center row  p-6 mb-8">
          {/* Product Carousel / Main Image Section */}
          <div className="md:w-1/2 col-7 flex justify-center items-center p-4 mb-5">
            <div className="relative w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              {/* Placeholder para la imagen principal del producto */}
              <img
                src="https://placehold.co/600x400/CCE5FF/003366?text=Product+Image"
                alt="Main Product"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/CCE5FF/003366?text=Image+Not+Found";
                }}
              />
              {/* Pequeño indicador de "carousel" si fuera interactivo */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="block w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
              </div>
            </div>
          </div>

          {/* Product Details Section - Título, Precio, Cantidad, Añadir al Carrito */}
          <div className="md:w-1/2 p-4 md:pl-8 flex flex-col col-5 justify-between">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
                Amazing Product Name
              </h2>
              <p className="text-2xl font-bold text-blue-600 mb-4">$49.99</p>

              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="w-24 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                  defaultValue="1"
                  min="1"
                />
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-200 ease-in-out shadow-md hover:shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product Description Section */}
        <section className=" p-6 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 pb-2">
            Product Description
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Discover the incredible features of this amazing product. Crafted
            with precision and designed for excellence, it offers unparalleled
            performance and reliability. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptatibus, omnis minima.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Enhance your daily life with its innovative capabilities. It's built
            to last and provides exceptional value. Repellat, expedita molestias
            non voluptatem est facilis aliquam rem ut perferendis.
          </p>
        </section>

        {/* Recommended Products Section */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center border-b-2 pb-2">
            Recommended For You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Array de datos de productos recomendados (en un caso real, esto vendría de un API) */}
            {[
              {
                id: 1,
                imageUrl:
                  "https://placehold.co/300x200/F0F8FF/003366?text=Product+A",
                title: "Recommended Item A",
                price: "$25.00",
              },
              {
                id: 2,
                imageUrl:
                  "https://placehold.co/300x200/F0F8FF/003366?text=Product+B",
                title: "Recommended Item B",
                price: "$35.50",
              },
              {
                id: 3,
                imageUrl:
                  "https://placehold.co/300x200/F0F8FF/003366?text=Product+C",
                title: "Recommended Item C",
                price: "$18.75",
              },
              {
                id: 4,
                imageUrl:
                  "https://placehold.co/300x200/F0F8FF/003366?text=Product+D",
                title: "Recommended Item D",
                price: "$52.99",
              },
            ].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer Placeholder - Se asume un componente de Footer compartido */}
      <footer className="bg-gray-800 text-white p-6 mt-8 rounded-t-lg">
        <div className="container mx-auto text-center text-sm">
          &copy; {new Date().getFullYear()} My Awesome Store. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
