import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false, // Initially set to false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set isAuthenticated to true
    login: (state) => {
      state.isAuthenticated = true;
    },
    // Action to set isAuthenticated to false
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;