import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    remProduct: (state, action) => {
      state.quantity -= 1;
      state.products.pop(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    addQuant: (state, action) => {
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    remQuant: (state, action) => {
      state.quantity -= 1;
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct, remProduct, addQuant, remQuant } = cartSlice.actions;
export default cartSlice.reducer;
