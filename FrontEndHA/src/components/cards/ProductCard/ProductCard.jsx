import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ product, columns }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
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

  return (
    <div className={`col-${columns} p-2 col-sm-12 col-md-${columns}`}>
      <div className="border border-dark d-flex justify-content-center flex-column rounded p-2">
        <Link className="no-underline" to={`/products/${product.id}`}>
          <div className="ratio ratio-1x1">
            <img
              className="img-fluid object-fit-cover rounded"
              src={product.image}
              alt="product image"
            />
          </div>
        </Link>

        <div className="d-flex p-2 flex-column">
          <div>
            <Link className="no-underline" to={`/products/${product.id}`}>
              <h6 className="text-black">{product.name}</h6>
            </Link>
            <p>${product.price}</p>
          </div>
          {product.stock > 0 ? (
            <button
              className="rounded bg-transparent border text-black border-black boton-hover"
              onClick={handleAddToCart}
            >
              Agregar al carrito <FaCartPlus />
            </button>
          ) : (
            <p>Agotado</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
