import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "./store"

// Define a type for the slice state
interface UserState {
    firstName:string;
    lastName:string;
    mobileNumber:string;
    password:string;
}

// Define the initial state using that type
const initialState={
    user:null,
    isFeteching:false,
    success:false,
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loginStart: (state) => {
          state.isFeteching=true;
    },
    loginSuccess: (state,action) => {
          state.user=action.payload;     
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    loginFailure: (state) => {
         state.isFeteching=false;
         state.success=true;
    },
  },
})

export const {loginStart,loginFailure,loginSuccess} = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer