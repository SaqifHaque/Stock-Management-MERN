import React from 'react';
import loginImg from '../../assets/Stock.png';

const ForgotPassoword = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt=''/>
            </div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>Verification</h2>
                    <div className='form-group'>
                        <label>Email</label>
                        <input className='form-control' type="text"/>
                    </div>
                    <button className='btn-primary'>Verify</button>
                </form>
            </div>   
        </div>
    )
}

export default ForgotPassoword;