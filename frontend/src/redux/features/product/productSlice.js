import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
   product: null,
   products: [],
   isError: false,
   isSuccess: false,
   isLoading: false,
   message: ""
}

const authSlice  = createSlice({
    name: "auth",
    initialState,
    reducers: {
        CALC_STORE_VALUE(state, action) {
            console.log("Store value");
        }
    },
    extraReducers: (builder) => {

    }
})

export const {CALC_STORE_VALUE} = authSlice.actions;


export default authSlice.reducer;