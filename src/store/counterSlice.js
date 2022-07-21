import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.number++;
    },
    decrement: (state) => {
      state.number--;
    },
    incrementBy5: (state, action) => {
        state.number += action.payload.amount;
    },
    decrementBy5: (state, action) => {
        state.number -= action.payload.amount;
    },
  },
});

export const counterActions = counterSlice.actions
export default counterSlice.reducer