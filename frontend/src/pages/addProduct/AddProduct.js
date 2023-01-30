import React, { useState } from 'react';
import { selectIsLoading } from '../../redux/features/product/productSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import ProductForm from '../../component/productForm/ProductForm';
import { createProduct } from '../../redux/features/product/productSlice';
import Loader from '../../component/loader/Loader';

const dummy = {
    name: "",
    category: "",
    quantity: "",
    price: "",
}

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState(dummy);
    const [productImage, setProductImage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [description, setDescription] = useState("");
    const isLoading = useSelector(selectIsLoading);

    const { name, category, price, quantity} = product;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }

    const handleImageChange = (e) => {
        setProductImage(e.target.files[0]);
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    };

    const generateSKU = (category) => {
        const letter = category.slice(0,3).toUpperCase();
        const number = Date.now();
        const sku = letter + "-" + number;
        return sku;
    }

    const saveProduct = async (e) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("sku", generateSKU(category));
        formData.append("category", category);
        formData.append("quantity", quantity);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("image", productImage);

        console.log(formData);

        await dispatch(createProduct(formData))

        navigate('/dashboard');

    }

  return (
    <div className='h-auto w-full'>
        {isLoading && <Loader/>}
            <div className='bg-gray-800 flex flex-col justify-center'>
                <ProductForm
                product={product}
                productImage={productImage}
                imagePreview={imagePreview}
                description={description}
                setDescription={setDescription}
                handleInputChange={handleInputChange}
                handleImageChange={handleImageChange}
                saveProduct={saveProduct}
                />
            </div>
    </div>
  )
}

export default AddProduct