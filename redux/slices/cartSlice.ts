import { Product } from "@/types/global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    items: Product[];
}

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
