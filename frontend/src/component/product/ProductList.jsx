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
    <div className='bg-gray-800 text-gray-400'>
        <h1>Invetory Items</h1>
        <span>
            {/* <Search value={search} onChange={(e) => setSearch(e.target.value)}/> */}
        </span>
        {!isLoading && products.length === 0 ? (
            <p>-- No Product found, please add a product ...</p>
        ) : (<span>Hello</span>)}
        <table class="table-fixed w-full border-seperate">
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
            <tbody>
                {
                    filteredProducts.map((product, index) => {
                        const { _id, name, category, price, quantity } = product;
                        return (
                            <tr key={_id}>
                                <td>{index+1}</td>
                                <td>{shortenText(name, 16)}</td>
                                <td>{category}</td>
                                <td>{"$"}{price}</td>
                                <td>{quantity}</td>
                                <td>{"$"}{price*quantity}</td>
                                <td>
                                    <span><VscEye size={20}/></span>
                                    <span><VscEdit size={20}/></span>
                                    <span><VscTrash size={20}/></span>
                                </td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                </tr>
                <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
                </tr>
                <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ProductList