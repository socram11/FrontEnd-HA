import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array de productos en el carrito
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Agrega un producto al carrito
    addToCart: (state, action) => {
      const { id, name, price, quantity = 1 } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity; // Incrementa cantidad si ya existe
      } else {
        state.items.push({ id, name, price, quantity }); // Añade nuevo producto
      }
    },

    // Elimina un producto del carrito
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    // Limpia todo el carrito
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Exporta las acciones automáticamente generadas
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Exporta el reducer
export default cartSlice.reducer;
