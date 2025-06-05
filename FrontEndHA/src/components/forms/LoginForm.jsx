// src/components/forms/LoginForm.jsx
import React from 'react';


const LoginForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo electrónico</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="nombre@ejemplo.com"
        />
      </div>


      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Contraseña"
        />
      </div>


      <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
    </form>
  );
};


export default LoginForm;


