import React from "react";

const ProductCard = ({ product, columns }) => {
  return (
    <div className={`col-${columns} p-2 col-sm-12 col-md-${columns}`}>
      <div className="border border-dark d-flex justify-content-center flex-column rounded">
        <div>img</div>
        <div className="text-start">
          <h6>{product.name}</h6>
          <p>Precio: ${product.price}</p>
          {product.stock > 0 ? (
            <button>Agregar al carrito</button>
          ) : (
            <p>Agotado</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
