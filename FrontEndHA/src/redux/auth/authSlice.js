// src/redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.user.id; // solo guardamos el ID
    },
    logout: (state) => {
      state.token = null;
      state.userId = null;
    },
  },
});

export const { setAuthData, logout } = authSlice.actions;
export default authSlice.reducer;
