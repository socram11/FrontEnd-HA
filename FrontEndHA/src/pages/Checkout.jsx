import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen py-5 container">
      <div className="">
        <div className="py-5 text-start">
          <h2>Checkout</h2>
          <p className="lead"></p>
        </div>

        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Carrito</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Nombre de elemento</h6>
                  <small className="text-muted">Descripcion</small>
                </div>
                <span className="text-muted">Precio</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Segundo elemento</h6>
                  <small className="text-muted">Breve descripcion</small>
                </div>
                <span className="text-muted">Precio</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Tercer elemento </h6>
                  <small className="text-muted">Breve descripcion</small>
                </div>
                <span className="text-muted">Precio</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Codigo de promocion</h6>
                  <small>EJEMPLOCODIGO</small>
                </div>
                <span className="text-success">Monto de descuento</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (UY)</span>
                <strong>Precio final</strong>
              </li>
            </ul>

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

          <div className="col-md-8 order-md-1 text-start">
            <button className=" mb-3 border border-black bg-transparent text-black my-2">
              <h5 className="">Login to continue</h5>
            </button>
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
                <label htmlFor="address">Numero de puerta</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Numero de puerta de lugar a recibir."
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
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">País</label>
                  <select
                    className="custom-select d-block w-full bg-transparent text-black my-2"
                    id="country"
                    required
                  >
                    <option value="">Seleccione</option>
                    <option>Uruguay</option>
                  </select>
                </div>
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
                  <label htmlFor="zip">Codigo Postal</label>
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
                  Guardar esta infromacion para proximas compras.
                </label>
              </div>

              <hr className="mb-4" />

              <h4 className="mb-3">Metodo de pago</h4>

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
                  <label htmlFor="cc-number">Numero de tarjeta</label>
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
                  <label htmlFor="cc-expiration">Expiracion</label>
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
