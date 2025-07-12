import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/cards/cartItem";
import CreateOrderButton from "../components/CreateOrderButton";

const Checkout = () => {
  const { userId } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.items) || [];
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, [userId, navigate]);

  if (!userId) {
    return null;
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="pb-5 container">
      <div className="">
        <div className="py-5 text-start">
          <h3 className="font-bolder">Checkout</h3>
        </div>

        <div className="row gap-5">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Tu compra</span>
              <span className="badge badge-secondary badge-pill">
                {cartItems.length}
              </span>
            </h4>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Codigo de promocion"
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={(e) => e.preventDefault()}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-7 order-md-1 text-start">
            <div>
              {" "}
              <hr className="mb-4" />
              <CreateOrderButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
