import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/cards/cartItem";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems < 1) {
    return (
      <>
        <div className="mt-3 d-flex flex-column">
          <h4>No tienes productos en el carrito</h4>
          <Link to={"/products"}>
            <button className="rounded-0 bg-transparent border text-black border-black boton-hover">
              Ir al catalogo
            </button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <div className="d-flex pb-4">
          <h3 className="font-bolder">Carrito</h3>
        </div>
        <div className="row gap-5">
          <div className="d-flex flex-column col-7">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="col-4 bg-light d-flex align-items-start flex-column border border-black p-5 h-auto plantsbackground">
            <div>
              <p className="fw-bold">Total: ${total} (sin envio)</p>
            </div>
            <div>
              <Link to={"/checkout"}>
                <button className="my-2 rounded-0 bg-transparent border text-black border-black boton-hover">
                  Finalizar compra
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/products"}>
                <button className="rounded-0 bg-transparent border text-black border-black boton-hover">
                  Continuar comprando
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
