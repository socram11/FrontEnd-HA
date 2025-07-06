import React from "react";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {
  return (
    <section>
      <div
        className="px-4 py-5 px-md-5 text-center text-lg-start"
        style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
      >
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="text-warning my-5 display-3 fw-bold ls-tight">
                <span style={{ color: "#b7ba5b" }}>
                  Cosechamos la naturaleza
                </span>
                <br />
                <span className="text-success">
                  <span style={{ color: "#b7ba5b" }}></span>
                  para ofrecerte salud y sabor en cada producto.
                </span>
              </h1>
              <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <LoginForm></LoginForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Jumbotron */}
    </section>
  );
};

export default Login;
