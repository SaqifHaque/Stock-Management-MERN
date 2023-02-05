import axios from "axios";
import { toast } from 'react-toastify';

const BACKEND_URL= process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/products/`;


const createProduct = async (formData) => {
    const response = await axios.post(API_URL, formData);
    return response.data;
}

const getProducts = async (formData) => {
    const response = await axios.get(API_URL);
    return response.data;
}

const deleteProduct = async (id) => {
    const response = await axios.delete(API_URL + id);
    return response.data;
}


const productAPI = {
    createProduct,
    getProducts,
    deleteProduct
}

export default productAPI;