import React from 'react'
import LogoImg from '../../assets/Logo.png'
import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-[#292f45] text-white mx-4 mt-6 rounded-xl shadow-md px-4'>
        <div className="flex justify-between">
            <div className="flex">
                <img src={LogoImg} alt="" className='h-16'/>
                <Link to={'/'}>
                    <h1 className="text-xl font-semibold text-purple-500 pt-4">VidsWe.com</h1>
                </Link>
            </div>
            <div className="pt-4">
                <Link to={'SignIn'}>
                    <BsPersonCircle className='h-8 w-auto text-purple-500'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar