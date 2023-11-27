import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eng: false,
};

export const languageSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    langChange: (state, { payload }) => {
      state.eng = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { langChange } = languageSlice.actions;

export default languageSlice.reducer;
