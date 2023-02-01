import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import productAPI from '../../../api/productAPI';

const initialState = {
   product: null,
   products: [],
   isError: false,
   isSuccess: false,
   isLoading: false,
   message: ""
}

export const createProduct = createAsyncThunk(
    "products/create",
    async (formData, thunkAPI) => {
        try {
            return await productAPI.createProduct(formData);
        } catch(error) {
            const message = (
                error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString();

            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }   
    }
)

const authSlice  = createSlice({
    name: "auth",
    initialState,
    reducers: {
        CALC_STORE_VALUE(state, action) {
            console.log("Store value");
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            console.log(action.payload);
            state.products.push(action.payload);
            toast.success("Product added successfully");
        });
        builder.addCase(createProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.message = action.payload;
            toast.error(action.payload);
        });
    }
})

export const {CALC_STORE_VALUE} = authSlice.actions;

export const selectIsLoading = (state) => state.product.isLoading;


export default authSlice.reducer;