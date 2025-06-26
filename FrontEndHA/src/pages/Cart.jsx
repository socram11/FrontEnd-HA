import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/cards/cartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
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
          <div className="col-4 border border-black p-5 h-auto">
            <p>Total: ${total}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
