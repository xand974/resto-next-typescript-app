import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateInterface {
  products: any[];
  total: number;
}

const initialState: InitialStateInterface = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<any>) => {
      state.products = [...state.products, action.payload];
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action: PayloadAction<any>) => {
      state.products = state.products.filter(
        (prod) => prod._id !== action.payload
      );
      state.total -= action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const { addProduct, removeProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
