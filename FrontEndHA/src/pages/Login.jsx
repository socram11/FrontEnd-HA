// src/pages/Login.jsx
import React from 'react';
import LoginForm from '../components/forms/LoginForm';


const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-5 bg-white shadow rounded" style={{ minWidth: '350px' }}>
        <h2 className="mb-4 text-center">Iniciar sesión</h2>
        <LoginForm />
      </div>
    </div>
  );
};




export default Login;
