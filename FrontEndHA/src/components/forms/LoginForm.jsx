// src/components/LoginForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAuthData } from "../../redux/auth/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/client-tokens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Error al iniciar sesión");

      const data = await response.json();
      dispatch(setAuthData(data));

      // Redirige a /userpage si el login fue exitoso
      navigate("/user-page");
    } catch (error) {
      console.error("Login fallido:", error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="form-control mb-2"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="mb-2" type="submit">
          Iniciar sesión
        </button>
      </form>
      <div>
        <Link to={"/create-account"}>
          <p>Crear una cuenta</p>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
