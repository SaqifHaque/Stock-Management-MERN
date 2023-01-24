import React from 'react';
import loginImg from '../../assets/Stock.png';

const ResetPassword = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt=''/>
            </div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>Reset Password</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>New Password</label>
                        <input className='form-control' type="password"/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Confirm Password</label>
                        <input className='form-control' type="password"/>
                    </div>
                    <button className='btn-primary'>Reset</button>
                </form>
            </div>   
        </div>
    )
}

export default ResetPassword;