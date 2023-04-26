import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = counterSlice.actions;

export default counterSlice.reducer;
