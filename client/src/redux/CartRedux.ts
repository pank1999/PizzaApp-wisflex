import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from "./store"

// Define a type for the slice state

// Define the initial state using that type
const initialState={
    Ingredient:[{}],
    Quantity:0,
    TotalPrice:0
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addIngredient:(state,action)=>{
        state.Ingredient.push(action.payload);
        state.Quantity+=1;
        state.TotalPrice+=action.payload.Price;
    }
  },
})

export const {addIngredient} = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer