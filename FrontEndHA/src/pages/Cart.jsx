import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex pb-4 ">
          <h3>Carrito</h3>
        </div>
        <div className="d-flex row justify-content-center">
          <div className="d-flex flex-column justify-content-between col-8">
            <div className="row p-3 g-2 border border-black">
              <div className="col-4 px-5">product.img and data</div>
              <div className="col-4 px-5">change quantity</div>
              <div className="col-4 px-5">Pricce</div>
            </div>
            <div className="row p-3 g-2 border border-black">
              <div className="col-4 px-5">product.img and data</div>
              <div className="col-4 px-5">change quantity</div>
              <div className="col-4 px-5">Pricce</div>
            </div>
            <div className="row p-3 g-2 border border-black">
              <div className="col-4 px-5">product.img and data</div>
              <div className="col-4 px-5">change quantity</div>
              <div className="col-4 px-5">Pricce</div>
            </div>
            <div className="row p-3 g-2 border border-black">
              <div className="col-4 px-5">product.img and data</div>
              <div className="col-4 px-5">change quantity</div>
              <div className="col-4 px-5">Pricce</div>
            </div>
          </div>
          <div className="col-4 d-flex flex-column justify-content-between py-3">
            <div>
              <textarea
                className="form-control"
                placeholder="Notas adicionales"
              ></textarea>
            </div>
            <div>$TotalPrice</div>
            <div>
              <Link to={"/checkout"}>
                <button>Go to checkOut</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
