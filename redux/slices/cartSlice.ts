import { Product } from "@/types/global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// CartState stores products with quantities
interface CartState {
  items: { product: Product; quantity: number }[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add a product to the cart
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.items.find(
        (item) => item.product.id === action.payload.id
      );
      
      if (existingProduct) {
        // If the product already exists, increase its quantity
        existingProduct.quantity += 1;
      } else {
        // Otherwise, add the product with a quantity of 1
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },

    // Remove a product from the cart
    removeFromCart: (state, action: PayloadAction<number>) => {
      const existingProduct = state.items.find(
        (item) => item.product.id === action.payload
      );
      
      if (existingProduct) {
        // Decrease quantity or remove product if quantity is 1
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.product.id !== action.payload
          );
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
