import React, { useEffect, useState } from 'react'
import {VscEye, VscEdit, VscTrash}from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_PRODUCTS, selectFilteredProducts } from '../../redux/features/product/filterSlice';
import Search from '../search/Search';

const ProductList = ({products, isLoading}) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const filteredProducts = useSelector(selectFilteredProducts);

    const shortenText = (text, n) => {
        if(text.length) {
            const shortenedText = text.substring(0, n).concat("...")
            return shortenedText;
        }
        return text;
    }

    useEffect(() => {
      dispatch(FILTER_PRODUCTS({products, search}))
    }, [products, search, dispatch])
    


  return (
    <div className='bg-gray-800 text-gray-300'>
        <span className="float-left text-4xl m-3">Invetory Items</span>
        <span className="float-right m-4">
            <Search value={search} onChange={(e) => setSearch(e.target.value)}/>
        </span>
        <table className="table-fixed w-full border-seperate">
            <thead className="bg-gray-900 rounded-lg">
                <tr className="rounded-lg">
                <th className="border border-gray-600">S/N</th>
                <th className="border border-gray-600">Name</th>
                <th className="border border-gray-600">Category</th>
                <th className="border border-gray-600">Price</th>
                <th className="border border-gray-600">Quantity</th>
                <th className="border border-gray-600">Value</th>
                <th className="border border-gray-600">Action</th>
                </tr>
            </thead>
            {!isLoading && filteredProducts.length === 0 ? (
            <tbody className='border-2 border-teal-600 bold'>-- No Product found --</tbody>
        ) : (
            <tbody>
                {
                    filteredProducts.map((product, index) => {
                        const { _id, name, category, price, quantity } = product;
                        console.log("hello", product);
                        return (
                            <tr key={_id}>
                                <td className="border-2 border-teal-600 bold">{index+1}</td>
                                <td className="border-2 border-teal-600 bold">{shortenText(name, 16)}</td>
                                <td className="border-2 border-teal-600 bold">{category}</td>
                                <td className="border-2 border-teal-600 bold">{"$"}{price}</td>
                                <td className="border-2 border-teal-600 bold">{quantity}</td>
                                <td className="border-2 border-teal-600 bold">{"$"}{price*quantity}</td>
                                <td className="flex flex-row justify-center items-center gap-6 border-2 border-teal-600 bold">
                                    <span className="m-1"><VscEye size={20}/></span>
                                    <span><VscEdit size={20}/></span>
                                    <span><VscTrash size={20}/></span>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            )}
        </table>
    </div>
  )
}

export default ProductList