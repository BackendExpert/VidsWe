import React, { useEffect } from 'react'
import DashSide from './DashSide';
import { Outlet, useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'
import DashFooter from '../Footers/DashFooter';


const Dashboard = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    if(EmailUser !== null || RoleUser !== null){
        return (
          <div className="w-full min-h-screen bg-[#141c30] text-white">
            <div className="md:flex">
              <div className="w-1/5  overflow-y-auto scrollbar-thin scrollbar-thumb-[#292f45] scrollbar-track-gray-900">
                  <DashSide />
              </div>
              <div className="md:w-full"> 
                <div className="px-2 md:mr-4  md:mx-0 ml-4 mr-4 py-8">
                  <Outlet />
                </div>
                <DashFooter />
              </div>
            </div>
          </div>
        );
      }
      else{
        useEffect(() => {
          localStorage.clear()
          navigate('/Login')
        }, [])
      }
}

export default Dashboard