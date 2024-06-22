import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../constants/cartItems";

const initialState = {
  cart: cartItems,
  totalAmount: 12,
  totalPrice: 276000,
};

export const cartSlice = createSlice({
  name: "cartfunction",
  initialState,
  reducers: {
    increase: (state, action) => {
      const item = state.cart.find((e) => e.id === action.payload);
      item.amount++;
      state.totalAmount++;
      state.totalPrice += parseInt(item.price);
    },
    decrease: (state, action) => {
      const item = state.cart.find((e) => e.id === action.payload);
      if (item.amount > 1) {
        item.amount--;
        state.totalAmount--;
        state.totalPrice -= parseInt(item.price);
      } else {
        state.cart = state.cart.filter((e) => e.id !== action.payload);
        state.totalPrice -= parseInt(item.price);
        state.totalAmount--;
      }
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((e) => e.id !== action.payload);
    },
    clear: (state, action) => {
      state.cart = [];
      state.totalPrice = 0;
      state.totalAmount = 0;
    },
    calculateTotals: (state, action) => {
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
      state.totalAmount = state.cart.reduce(
        (total, item) => total + item.amount,
        0
      );
    },
  },
});

export const { increase, decrease, remove, clear, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
