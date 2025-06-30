import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/auth/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    // Dispatch de la acción de login
    const resultAction = await dispatch(
      loginUser({
        email: email.value,
        password: password.value,
      })
    );

    // Verificar si el login fue exitoso
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/user-page"); // Redirigir si es exitoso
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Mostrar error si existe */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {/* Mostrar loading durante la petición */}
      {status === "loading" && (
        <div className="alert alert-info" role="alert">
          Verificando credenciales...
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo electrónico
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="nombre@ejemplo.com"
          required
          disabled={status === "loading"} // Deshabilitar durante carga
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Contraseña"
          required
          minLength="6"
          disabled={status === "loading"} // Deshabilitar durante carga
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block mb-4"
        style={{
          backgroundColor: "#0e614a",
          borderColor: "#0e614a",
        }}
        disabled={status === "loading"} // Deshabilitar durante carga
      >
        {status === "loading" ? "Ingresando..." : "Ingresar"}
      </button>
    </form>
  );
};

export default LoginForm;
