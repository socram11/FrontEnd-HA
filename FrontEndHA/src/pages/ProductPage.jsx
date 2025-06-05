import React from "react";

import ProductCard from "../components/cards/ProductCard"; 

const ProductPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-inter text-gray-800">
      {/* Navbar Placeholder - Se asume un componente de Navbar compartido */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center rounded-b-lg">
        <h1 className="text-xl font-bold text-gray-700">Mi Tienda</h1>
        <div className="flex space-x-4">
          {/* Iconos de usuario y carrito, usando lucide-react */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        </div>
      </nav>

      <main className="container mx-auto p-4 max-w-7xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row p-6 mb-8">
          {/* Product Carousel / Main Image Section */}
          <div className="md:w-1/2 flex justify-center items-center p-4">
            <div className="relative w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              {/* Placeholder para la imagen principal del producto */}
              <img
                src="https://placehold.co/600x400/CCE5FF/003366?text=Product+Image"
                alt="Main Product"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCE5FF/003366?text=Image+Not+Found'; }}
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
          <div className="md:w-1/2 p-4 md:pl-8 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Amazing Product Name</h1>
              <p className="text-2xl font-bold text-blue-600 mb-4">$49.99</p>

              <div className="mb-6">
                <label htmlFor="quantity" className="block text-gray-700 text-sm font-semibold mb-2">Quantity:</label>
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
        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 pb-2">Product Description</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Discover the incredible features of this amazing product. Crafted with precision and designed for excellence,
            it offers unparalleled performance and reliability. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus, omnis minima.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Enhance your daily life with its innovative capabilities. It's built to last and provides exceptional value.
            Repellat, expedita molestias non voluptatem est facilis aliquam rem ut perferendis.
          </p>
        </section>

        {/* Recommended Products Section */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center border-b-2 pb-2">Recommended For You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Array de datos de productos recomendados (en un caso real, esto vendría de un API) */}
            {[
              { id: 1, imageUrl: "https://placehold.co/300x200/F0F8FF/003366?text=Product+A", title: "Recommended Item A", price: "$25.00" },
              { id: 2, imageUrl: "https://placehold.co/300x200/F0F8FF/003366?text=Product+B", title: "Recommended Item B", price: "$35.50" },
              { id: 3, imageUrl: "https://placehold.co/300x200/F0F8FF/003366?text=Product+C", title: "Recommended Item C", price: "$18.75" },
              { id: 4, imageUrl: "https://placehold.co/300x200/F0F8FF/003366?text=Product+D", title: "Recommended Item D", price: "$52.99" },
            ].map(product => (
              <ProductCard key={product.id} imageUrl={product.imageUrl} title={product.title} price={product.price} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer Placeholder - Se asume un componente de Footer compartido */}
      <footer className="bg-gray-800 text-white p-6 mt-8 rounded-t-lg">
        <div className="container mx-auto text-center text-sm">
          &copy; {new Date().getFullYear()} My Awesome Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
