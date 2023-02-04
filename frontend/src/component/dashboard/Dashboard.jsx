import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import authorization from "../../customHook/authorization";
import { selectIsLoggedIn } from '../../redux/features/auth/authSlice';
import { getProducts } from '../../redux/features/product/productSlice';
import ProductList from '../product/ProductList';
import ProductStats from '../product/ProductStats';


const Dashboard = () => {
  // authorization("/login");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const {products, isLoading, isError, message} = useSelector((state) => state.product);

  useEffect(() => {
    if(isLoggedIn) {
      dispatch(getProducts());
    }

    if(isError){
      console.log(message);
    }
  }, [isLoggedIn,isError, message, dispatch])
  

  return (
    <div className='h-full w-full bg-gray-800 flex flex-col'>
        <ProductStats products={products}/>
        <ProductList products={products} isLoading={isLoading}/>
    </div>
  )
}

export default Dashboard