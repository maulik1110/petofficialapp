// import {createSlice} from "reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
        // clearCart: (state) => {
        //     state.items.splice(0, state.items.length);
        //     // or
        //     // state.items = [];
        // }
    }
})

export const {addItem,removeItem,clearCart} =cartSlice.actions;
export default cartSlice.reducer;