import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex pb-4 ">
          <h3>Carrito</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 d-flex flex-column gap-3">
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
          <div className="col-12 col-md-4 d-flex flex-column justify-content-between py-3 mt-4 mb-5 mb-md-0 gap-3">
            <div>
              <textarea
                className="form-control mb-3"
                placeholder="Notas adicionales"
              ></textarea>
            </div>
            <div className="mb-3 text-center">$TotalPrice</div>
            <div className="text-center">
              <Link to={"/checkout"}>
                <button className="btn btn-dark fw-bold">Go to checkOut</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
