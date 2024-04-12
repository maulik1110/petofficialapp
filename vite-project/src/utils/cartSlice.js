// import {createSlice} from "reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";



// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         items: [],
//     },
//     reducers:{
//         addItem: (state,action)=>{
//             state.items.push(action.payload);
//         },
//         removeItem: (state,action)=>{
//             state.items.pop();
//         },
//         clearCart:(state)=>{
//             state.items.length=0;
//         },
//         // clearCart: (state) => {
//         //     state.items.splice(0, state.items.length);
//         //     // or
//         //     // state.items = [];
//         // }
//     }
// })

// export const {addItem,removeItem,clearCart} =cartSlice.actions;
// export default cartSlice.reducer;


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        orders: []
    },
    reducers: {
        addItem: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.items = state.items.filter(item => item.id !== id);
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
