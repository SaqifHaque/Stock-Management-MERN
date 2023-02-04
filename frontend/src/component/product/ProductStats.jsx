import React from 'react'
import { MdOutlineInventory2 } from "react-icons/md"
import { BsCartX } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { CALC_STORE_VALUE, selectTotalStoreValue } from '../../redux/features/product/productSlice';
import { useEffect } from 'react';

const ProductStats = ({products}) => {
    const dispatch = useDispatch();
    const totalStoreValue = useSelector(selectTotalStoreValue);

    useEffect(() => {
        dispatch(CALC_STORE_VALUE(products))
    }, [dispatch, products])
  return (
    <div className="w-11/12">
        <span className="text-4xl m-3 text-gray-300">Inventory Stats</span>
        <div className="flex flex-row text-gray-100 font-bold text-lg gap-4 p-4">
            <div className='w-1/4 h-20 bg-teal-400 rounded-lg'>
                <div className="flex flex-row m-2">
                    <MdOutlineInventory2 size="60"/>
                    <div className="flex flex-col">
                        <span className="mx-3">Total Products</span>
                        <span className="flex justify-center items-center">{products.length}</span>
                    </div>
                </div>
            </div>
            <div className='w-1/4 h-20 bg-teal-400 rounded-lg'>
                <div className="flex flex-row m-2"><AiOutlineDollarCircle size="60"/>
                    <div className="flex flex-col">
                        <span className="mx-3">Total Store Value</span>
                        <span className="flex justify-center items-center">${totalStoreValue}</span>
                    </div>
                </div>
            </div>
            <div className='w-1/4 h-20 bg-teal-400 rounded-lg'>
                <div className="flex flex-row m-2"><BsCartX size="60"/>
                    <div className="flex flex-col">
                        <span className="mx-3">Out of Stock</span>
                        <span className="flex justify-center items-center">0</span>
                    </div>
                </div>
            </div>
            <div className='w-1/4 h-20 bg-teal-400 rounded-lg'>
                <div className="flex flex-row m-2"><BiCategoryAlt size="60"/>
                    <div className="flex flex-col">
                        <span className="mx-3">All Categories</span>
                        <span className="flex justify-center items-center">0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductStats