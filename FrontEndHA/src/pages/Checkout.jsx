import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/cards/cartItem";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className=" pb-5 container">
      <div className="">
        <div className="py-5 text-start">
          <h3 className="font-bolder">Checkout</h3>
          <p className="lead"></p>
        </div>

        <div className="row gap-5">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Tu compra</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Codigo de promocion"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">
                    Agregar
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-7 order-md-1 text-start">
            <form>
              <div className="mb-3">
                <h4 className="mb-3">Delivery</h4>
                <label htmlFor="delivery"></label>
                <select
                  className="custom-select d-block w-full bg-transparent text-black my-2"
                  id="country"
                  required
                >
                  <option value="">Seleccione</option>
                  <option>SI</option>
                  <option>NO</option>
                </select>
                <label htmlFor="email">
                  Calle <span className="text-muted">(Esquina)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Calle y esquina de lugar a recibir."
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address">Número de puerta</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Número de puerta de lugar a recibir."
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address2">
                  Piso <span className="text-muted"></span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Número de piso de lugar a recibir."
                />
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">Departamento </label>
                  <select
                    className="custom-select d-block w-full bg-transparent text-black my-2"
                    id="state"
                    required
                  >
                    <option value="">Seleccione</option>
                    <option>Montevideo</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Código Postal</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <hr className="mb-4" />

              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="save-info"
                />
                <label className="custom-control-label" htmlFor="save-info">
                  Guardar esta información para próximas compras.
                </label>
              </div>

              <hr className="mb-4" />

              <h4 className="mb-3">Método de pago</h4>

              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    defaultChecked
                    required
                  />
                  <label className="custom-control-label" htmlFor="credit">
                    Tarjeta de crédito
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" htmlFor="debit">
                    Tarjeta de débito
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    Transferencia
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Nombre de titular de tarjeta</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small className="text-muted">
                    Nombre completo el cual se encuentra en la tarjeta
                  </small>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Número de tarjeta</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Expiración</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-cvv">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <hr className="mb-4" />
              <button
                className="btn btn-success btn-lg btn-block"
                type="submit"
              >
                Continue para confirmar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
