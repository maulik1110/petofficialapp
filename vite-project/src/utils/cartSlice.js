// // import {createSlice} from "reduxjs/toolkit"
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         items: [],
//         orders: []
//     },
//     reducers: {
//         addItem: (state, action) => {
//             const { id } = action.payload;
//             const existingItem = state.items.find(item => item.id === id);
//             if (existingItem) {
//                 existingItem.quantity += 1;
//             } else {
//                 state.items.push({ ...action.payload, quantity: 1 });
//             }
//         },
//         removeItem: (state, action) => {
//             const { id } = action.payload;
//             const existingItem = state.items.find(item => item.id === id);
//             if (existingItem && existingItem.quantity > 1) {
//                 existingItem.quantity -= 1;
//             } else {
//                 state.items = state.items.filter(item => item.id !== id);
//             }
//         },
//         clearCart: (state) => {
//             state.items = [];
//         },
//         addOrder: (state, action) => {
//             state.orders.push(action.payload);
//         },
//     },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addtocart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.title === newItem.title);
      if (existingItem) {
        existingItem.quantity += newItem.quantity; // Update quantity for existing item
      } else {
        state.cart.push({ ...newItem, quantity: 1 }); // Add new item to cart
      }
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.title !== idToRemove);
    },
    addItem: (state, action) => {
      const idToIncrement = action.payload;
      const existingItem = state.cart.find((item) => item.title === idToIncrement);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity for existing item
      }
    },
    removeItem: (state, action) => {
      const idToDecrement = action.payload;
      const existingItem = state.cart.find((item) => item.title === idToDecrement);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1; // Decrement quantity for existing item (if quantity > 1)
      }
    },
  },
});

export const { addtocart, removeFromCart, addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
