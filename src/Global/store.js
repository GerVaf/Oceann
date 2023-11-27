// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import LoadingSlice from "./rtk/LoadingSlice";
import LanguageSlice from "./rtk/LanguageSlice";

export const store = configureStore({
  reducer: {
    loading: LoadingSlice,
    language: LanguageSlice,
  },
});
