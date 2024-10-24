import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { LiaUser, LiaPowerOffSolid  } from "react-icons/lia";
import { VscSettings } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'
import { MdNotificationsActive } from "react-icons/md";

const DashNav = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const [OpenMenu, SetOpenMenu] = useState(false)

    const toggleNavMenu = () => {
        SetOpenMenu(!OpenMenu)  // Toggle the menu state
    }

    return (
        <div className="">
            <div className='md:mt-4 mt-0 p-4 rounded-md shadow-md md:mr-4 md:mx-0 mx-2 bg-[#292f45]'>
                <div className="flex justify-between">
                    <div className="">
                        <h1 className="text-xl font-semibold py-1">Dashboard</h1>
                    </div>
                    <div className="">
                        <div className="flex cursor-pointer" >
                            <div className="pr-4 pt-2">
                                <MdNotificationsActive className='h-6 w-auto'/>
                            </div>
                            <div className="md:flex hidden " onClick={toggleNavMenu}>                            
                                <div className="">
                                    <h1 className="pr-2 pt-0 md:block hidden">JehanKandy</h1>
                                    {
                                        (() => {
                                            if(RoleUser === "SuperAdmin"){
                                                return(
                                                    <p className="text-[#ce4f52] text-sm">SuperAdmin</p>
                                                )
                                            }
                                            else if(RoleUser === "User"){
                                                return(
                                                    <p className="text-[#fdbd44] text-sm">User</p>
                                                )
                                            }
                                        })()
                                    }
                                </div>
                                <div className="pt-2 " >
                                    <BsPersonCircle className='h-8 w-auto'/>
                                </div>
                            </div>
                            <div className="pt-2 md:hidden block" onClick={toggleNavMenu}>
                                <BsPersonCircle className='h-8 w-auto'/>
                            </div>

                        </div>                
                    </div>
                </div>
            </div>

            {/* Dropdown Menu */}
            <div
                className={`md:mr-4 md:mx-0 mx-2 absolute right-0 mt-2 z-50 w-48 bg-[#292f45] py-4 px-8 rounded-md shadow-md transform transition-all duration-300 ease-in-out ${OpenMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="md:pb-2 pb-4 cursor-pointer">
                    <h1 className="pr-2 pb-1 md:hidden block">JehanKandy</h1>
                    <div className="md:hidden block">
                        {
                            (() => {
                                if(RoleUser === "SuperAdmin"){
                                    return(
                                        <p className="text-[#ce4f52]">SuperAdmin</p>
                                    )
                                }
                                else if(RoleUser === "User"){
                                    return(
                                        <p className="text-[#fdbd44]">User</p>
                                    )
                                }
                            })()
                        }
                    </div>
                </div>
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
