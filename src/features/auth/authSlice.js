import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "services";

export const login = createAsyncThunk("auth/login", async (data) => {
  const res = await authService.login(data);
  return res.data;
});

const initialState = {
  currentUser: {},
  loading: false,
  loggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedIn = true;
      state.error = null;
      state.currentUser = action.payload;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.loggedIn = false;
      state.error = action.error;
    });
  },
});

export default authSlice.reducer;
