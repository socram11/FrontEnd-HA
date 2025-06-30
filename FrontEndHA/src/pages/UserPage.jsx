import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserData());
    }
  }, [dispatch, user]);

  if (status === "loading") return <div>Cargando perfil...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No autenticado</div>;

  console.log(user);

  return (
    <div className="container text-start mt-5">
      <h2>Mi Perfil</h2>
      <div className="card">
        <div className="card-body">
          <h6 className="text-secondary mb-3">Datos</h6>
          <p>
            <strong>Nombre:</strong> {user.firstname} {user.lastname}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {user.phone && (
            <p>
              <strong>Teléfono:</strong> {user.phone}
            </p>
          )}
          {user.address && (
            <p>
              <strong>Dirección:</strong> {user.address}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
