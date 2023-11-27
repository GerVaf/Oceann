// src/features/loadingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    startLoading: (state) => true,
    stopLoading: (state) => false,
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;
export const selectLoading = (state) => state.loading;

export default loadingSlice.reducer;
