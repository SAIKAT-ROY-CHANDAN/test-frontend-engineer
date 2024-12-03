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
    },
});

export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
