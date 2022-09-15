import { createSlice } from "@reduxjs/toolkit";


// Define a type for the slice state
// Define the initial state using that type
const initialState = {
  Products:[{}],
  Size:0,
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.Products.push(action.payload);
      state.Size+= 1;
      //state.TotalPrice += action.payload.Price;
    },
    //Delete product
    // deleteProductStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    deleteProductSuccess: (state, action) => {
      console.log("deleting INg");
      state.Products.slice(
        state.Products.findIndex((item) => item === action.payload),
        1
      );
    },
    // deleteProductFail: (state) => {
    //   state.error = true;
    // },
    resetIng: (state) => {
      state.Products = [{}];
      state.Size = 0;
    //  state.TotalPrice = 0;
    },
  },
});

export const { addProducts, resetIng ,deleteProductSuccess } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer;
