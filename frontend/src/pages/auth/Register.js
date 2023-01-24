import React from 'react';
import loginImg from '../../assets/Stock.png';

const Register = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt=''/>
            </div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className='max-w-[700px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>Register</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-x-2'>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input className='form-control' type="text"/>
                    </div>
                    <div className='form-group'>
                        <label>Last Name</label>
                        <input className='form-control' type="text"/>
                    </div>
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input className='form-control' type="text"/>
                    </div>
                    <div className='form-group'>
                        <label>Phone</label>
                        <input className='form-control' type="text" size='14' placeholder='+880-XXX-XXXX-XXX'/>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-x-2'>
                        <div className='form-group'>
                            <label>Password</label>
                            <input className='form-control' type="password"/>
                        </div>
                        <div className='form-group'>
                            <label>Confirm Password</label>
                            <input className='form-control' type="password"/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label>Bio</label>
                        <textarea className='form-control' type="password"/>
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
                            <input type="file" name="file_upload" class="hidden"/>
                        </label>
                    </div>
                    <button className='btn-primary'>Register</button>
                </form>
            </div>   
        </div>
    )
}

export default Register;