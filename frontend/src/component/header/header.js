import React, { useState } from 'react';
import {MdAccountBalance} from 'react-icons/md';
import {VscSettingsGear} from 'react-icons/vsc';

const Header = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="shadow-md w-full fixed top-0 mx-auto">
            <div className="md:flex bg-gray-800 py-4 h-12 relative">
                <div className="absolute font-bold text-2xl cursor-pointer flex items-center font-[Poppins] left-3 text-gray-100">
                <MdAccountBalance/>
                    StockM
                </div>
                <div className="absolute flex items-center right-20 text-white cursor-pointer" onClick={() => setOpen(!open)}>
                    <VscSettingsGear size="20"/>
                </div>
                <div className='absolute flex items-center right-20 top-12'>
                    <div class={`duration-500 ${!open && "opacity-0 overflow-hidden"} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 mt-`}>
                    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>Saqif Hoque</div>
                            <div class="font-medium truncate">saqif@gmail.com</div>
                        </div>
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit Profile</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;