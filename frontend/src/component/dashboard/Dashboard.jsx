import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import authorization from "../../customHook/authorization";
import { selectIsLoggedIn } from '../../redux/features/auth/authSlice';
import { getProducts } from '../../redux/features/product/productSlice';
import ProductList from '../product/ProductList';


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
        <h1 className="text-gray-400">Dashboard</h1>
        <ProductList products={products} isLoading={isLoading}/>
    </div>
  )
}

export default Dashboard