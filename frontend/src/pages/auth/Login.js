import React from 'react';
import loginImg from '../../assets/Stock.png';

const Login = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt=''/>
            </div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>Sign In</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Email</label>
                        <input className='form-control' type="text"/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input className='form-control' type="password"/>
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p>Forgot Password?</p>
                    </div>
                    <button className='btn-primary'>Sign In</button>
                </form>
            </div>   
        </div>
    )
}

export default Login;