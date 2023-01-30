import React from 'react'

const ProductForm = ({product, productImage, imagePreview, description, setDescription, handleInputChange,
handleImageChange, saveProduct}) => {
  return (
    <form className='max-w-[1000px] w-full mx-auto bg-gray-900 p-8 mt-5 rounded-lg'>
        <h2 className='text-4xl dark:text-white font-bold text-center'>Add Product</h2>
        <div className='form-group'>
            <label>Product Name</label>
            <input className='form-control' type="text" name="name" onChange={handleInputChange} value={product?.name} required/>
        </div>
        <div className='form-group'>
            <label>Product Category</label>
            <input className='form-control' type="text" name="category" onChange={handleInputChange} value={product?.category} required/>
        </div>
        <div className='form-group'>
            <label>Product Price</label>
            <input className='form-control' type="text" name="email" onChange={handleInputChange} value={product?.price} required/>
        </div>
        <div className='form-group'>
            <label>Product Quantity</label>
            <input className='form-control' type="text" name="quantity" onChange={handleInputChange} value={product?.quantity} required/>
        </div>
        <div class="form-group">
            <label
                class="form-file-label">
                <span class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="font-medium text-gray-400">
                        Drop files to Attach, or
                        <span class="text-blue-600 underline">browse</span>
                    </span>
                </span>
                <input type="file" name="photo" class="hidden" onChange={handleInputChange}/>
            </label>
        </div>
        <button className='btn-primary'>Add Product</button>
    </form>
  )
}

export default ProductForm