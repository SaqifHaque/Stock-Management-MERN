import React, { useState } from 'react';
import {HiMenuAlt3} from 'react-icons/hi';
import {RxDashboard} from 'react-icons/rx';
import {MdLibraryAdd} from 'react-icons/md';
import {TfiBarChart} from 'react-icons/tfi';
import {VscReport} from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Sidebar = ({children}) => {
    const [open, setOpen] = useState(true);
    const menus = [
        { name: "Dashboard", link:"/", icon: RxDashboard},
        { name: "Add Product", link:"/", icon: MdLibraryAdd},
        { name: "Account", link:"/", icon: TfiBarChart},
        { name: "Report Bug", link:"/", icon: VscReport},
    ]
    return (
        <section className="flex gap-6">
            <div className={`${open ? "w-72" : "w-16"} duration-300 min-h-screen w-72 bg-gray-800 text-gray-100 px-4`}>
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)}/>
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {
                        menus?.map((menu, i) => (
                            <Link to={menu?.link} key={i} className={` ${menu?.margin && 'mt-5'} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-teal-500 rounded-md`}>
                                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                                <h2 style={{
                                    transitionDelay:`${i+3}00ms`
                                }} 
                                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{ menu?.name }</h2>
                                <h2 className={`${
                                    open && 'hidden'
                                } absolute left-48 bg-teal-500 font-medium whitespace-pre text-white rounded-md drop-shadow-lg
                                 px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                                 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`
                                }>{menu?.name}</h2>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="">
                {/* <main>{children}</main> */}
                HomePage
            </div>
        </section>
    )
}

export default Sidebar;