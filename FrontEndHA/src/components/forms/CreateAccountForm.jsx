import React from "react";

const CreateAccountForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      firstname: event.target.elements.firstname.value,
      lastname: event.target.elements.lastname.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
      address: event.target.elements.address?.value,
      phone: event.target.elements.phone?.value,
    };

    if (formData.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al registrar");
      }

      console.log("Usuario registrado:", data);
      alert("Registro exitoso! Serás redirigido al login");

      window.location.href = "/login";
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  return (
    <form id="registerForm" onSubmit={handleSubmit}>
      <h4>Crear cuenta</h4>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="form-control"
              required
            />
            <label className="form-label" htmlFor="firstname">
              Nombre
            </label>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="form-control"
              required
            />
            <label className="form-label" htmlFor="lastname">
              Apellido
            </label>
          </div>
        </div>
      </div>

      <div className="form-outline mb-4">
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          required
        />
        <label className="form-label" htmlFor="email">
          Correo electrónico
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          required
          minLength="6"
        />
        <label className="form-label" htmlFor="password">
          Contraseña
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          name="address"
          id="address"
          className="form-control"
        />
        <label className="form-label" htmlFor="address">
          Dirección
        </label>
      </div>

      <div className="form-outline mb-4">
        <input type="tel" name="phone" id="phone" className="form-control" />
        <label className="form-label" htmlFor="phone">
          Teléfono
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block mb-4"
        style={{
          backgroundColor: "#0e614a",
          borderColor: "#0e614a",
        }}
      >
        Registrarse
      </button>
    </form>
  );
};

export default CreateAccountForm;
