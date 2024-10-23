import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { LiaUser, LiaPowerOffSolid  } from "react-icons/lia";
import { VscSettings } from "react-icons/vsc";

const DashNav = () => {
    const [OpenMenu, SetOpenMenu] = useState(false)

    const toggleNavMenu = () => {
        SetOpenMenu(!OpenMenu)  // Toggle the menu state
    }

    return (
        <div className="relative">
            <div className='md:mt-4 mt-0 p-4 rounded-md shadow-md md:mr-4 md:mx-0 mx-2 bg-[#292f45]'>
                <div className="flex justify-between">
                    <div className="">
                        <h1 className="text-xl font-semibold">Dashboard</h1>
                    </div>
                    <div className="">
                        <div className="flex cursor-pointer" onClick={toggleNavMenu}>
                            <h1 className="pr-2 pt-1 md:block hidden">JehanKandy</h1>
                            <BsPersonCircle className='h-8 w-auto'/>
                        </div>                
                    </div>
                </div>
            </div>

            {/* Dropdown Menu */}
            <div
                className={`md:mr-4 md:mx-0 mx-2 absolute right-0 mt-2 z-50 w-48 bg-[#292f45] py-4 px-8 rounded-md shadow-md transform transition-all duration-300 ease-in-out ${OpenMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="flex pb-2 cursor-pointer">
                    <LiaUser className='h-6 w-auto'/>
                    <h1 className="pl-2">Profile</h1>
                </div>
                <div className="flex py-2 cursor-pointer">
                    <VscSettings className='h-6 w-auto'/>
                    <h1 className="pl-2">Settings</h1>
                </div>
                <div className="flex text-red-500 pt-2 cursor-pointer">
                    <LiaPowerOffSolid className='h-6 w-auto'/>
                    <h1 className="pl-2">LogOut</h1>
                </div>
            </div>
        </div>
    )
}

export default DashNav
