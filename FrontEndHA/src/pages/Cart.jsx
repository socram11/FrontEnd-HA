import React from "react";

const Cart = () => {
  return (
    <>
      <div className="d-flex p-4">
        <h3>Carrito</h3>
      </div>
      <div className="d-flex row g-5">
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
        <div className="col-4 d-flex flex-column justify-content-between">
          <div>Additional Notes</div>
          <div>Total Price</div>
          <div>Go to checkOut</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
