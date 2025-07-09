import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserPage = () => {
  const { token, userId } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token || !userId) return;

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/clients/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("No se pudo obtener el usuario");

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, [token, userId]);

  if (!token || !userId) return <p>No estás logueado.</p>;
  if (error) return <p>Error: {error}</p>;
  if (!userData) return <p>Cargando datos del usuario...</p>;

  return (
    <div className="container text-start mt-5">
      <h2>Mi Perfil</h2>
      <div className="card">
        <div className="card-body">
          <h6 className="text-secondary mb-3">Datos</h6>
          <p>
            <strong>Nombre:</strong> {userData.firstname} {userData.lastname}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          {userData.phone && (
            <p>
              <strong>Teléfono:</strong> {userData.phone}
            </p>
          )}
          {userData.address && (
            <p>
              <strong>Dirección:</strong> {userData.address}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
