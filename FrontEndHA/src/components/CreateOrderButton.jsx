import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { clearCart } from "../redux/cart/cartSlice"; // Asegúrate de que la ruta sea correcta

const CreateOrderButton = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); // Asegúrate de que esto coincida con tu estructura de Redux
  const { userId, token } = useSelector((state) => state.auth); // Obtenemos el userId del auth slice

  const handleCreateOrder = async () => {
    try {
      if (!cart.items || cart.items.length === 0) {
        alert("El carrito está vacío");
        return;
      }

      if (!userId) {
        alert("Debes iniciar sesión para crear una orden");
        return;
      }

      const orderData = {
        clientUserId: userId,
        status: "pending",
        items: cart.items.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
      };

      // Hacer la petición POST al backend
      const response = await axios.post(
        "http://localhost:3000/orders",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Manejar la respuesta exitosa
      console.log("Orden creada:", response.data);
      alert("Orden creada exitosamente");

      dispatch(clearCart());
    } catch (error) {
      console.error("Error al crear la orden:", error);
      alert(
        `Error al crear la orden: ${
          error.response?.data?.error || error.message
        }`
      );
    }
  };

  return (
    <button
      onClick={handleCreateOrder}
      disabled={!cart.items || cart.items.length === 0}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Crear Orden
    </button>
  );
};

export default CreateOrderButton;
