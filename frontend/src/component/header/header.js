import React, { useState } from 'react';
import {MdAccountBalance} from 'react-icons/md';
import {VscSettingsGear} from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../api/authAPI';
import { SET_LOGIN, selectName, selectEmail } from '../../redux/features/auth/authSlice';

const Header = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useSelector(selectName)

    const logout = async () => {
        await logoutUser();
        await dispatch(SET_LOGIN(false));
        navigate('/login');
    }
    return (
        <div className="shadow-md bg-gray-900 h-12">
            <div className="flex flex-wrap relative">
                <div className="absolute font-medium cursor-pointer flex items-center mt-2 left-2 text-gray-100">
                <MdAccountBalance size="25"/>
                <span class="ml-2 text-xl">StockM</span>
                </div>
                <div className="mx-auto items-center mr-5 mt-3 text-white cursor-pointer" onClick={() => setOpen(!open)}>
                    <VscSettingsGear size="20"/>
                </div>
                <div className='absolute flex items-center right-4 top-12'>
                    <div className={`duration-500 ${!open && "opacity-0 overflow-hidden"} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 mt-`}>
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>{name}</div>
                            <div className="font-medium truncate">{selectEmail}</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit Profile</span>
                            </li>
                            <li>
                                <span onClick={logout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;