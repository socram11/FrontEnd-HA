import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/client-tokens/login",
        {
          email,
          password,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserData = createAsyncThunk(
  "auth/fetchUser",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { token, user } = getState().auth;
      if (!token) throw new Error("No autenticado");

      const { data } = await axios.get(
        `http://localhost:3000/clients/${user.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const verifyToken = createAsyncThunk(
  "auth/verifyToken",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("No token found");

      const { data } = await axios.get(
        "http://localhost:3000/client-tokens/verify",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Token inválido");
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("userData")) || null, // Carga user
    token: localStorage.getItem("authToken") || null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData"); // Limpia user
      state.user = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.user = payload.user;
        state.token = payload.token;
        localStorage.setItem("authToken", payload.token);
        localStorage.setItem("userData", JSON.stringify(payload.user)); // Guarda user
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      })

      // Fetch User Data
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        state.user = payload; // Actualiza todos los datos del usuario
      })

      // Verify Token
      .addCase(verifyToken.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        localStorage.setItem("userData", JSON.stringify(payload.user)); // Actualiza user
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
