import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import productAPI from '../../../api/productAPI';

const initialState = {
   product: null,
   products: [],
   isError: false,
   isSuccess: false,
   isLoading: false,
   message: "",
   totalStoreValue: 0,
   outOfStock: 0,
   category: []
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

export const getProducts = createAsyncThunk(
    "products/getAll",
    async (_, thunkAPI) => {
        try {
            return await productAPI.getProducts();
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
            const products = action.payload;
            const array = [];
            products.map((item) => {
                const {price, quantity} = item;
                const productValue = price*quantity;
                return array.push(productValue);
            })
            const totalValue = array.reduce((a,b) => {
                return a+b;
            }, 0)
            state.totalStoreValue = totalValue;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError=false;
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
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError=false;
            console.log(action.payload);
            state.products = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.message = action.payload;
            toast.error(action.payload);
        });
    }
})

export const {CALC_STORE_VALUE} = authSlice.actions;

export const selectIsLoading = (state) => state.product.isLoading;

export const selectTotalStoreValue = (state) => state.product.totalStoreValue;


export default authSlice.reducer;