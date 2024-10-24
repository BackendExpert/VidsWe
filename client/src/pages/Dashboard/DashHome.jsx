import React from 'react'
import { GrUserNew } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'
import DashBtns from '../../components/DashBtns/DashBtns';
import GoldBadge from '../../components/Badges/GoldBadge';

const DashHome = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");
  return (
    <div>
        <div className="md:flex">
            <div className="md:w-1/3 bg-[#292f45] md:mr-2 p-4 rounded-xl shadow-md md:mb-0 mb-2">
                <h1 className="text-white/60 font-semibold text-center">Congratulations {EmailUser}</h1>
                  <div className="flex justify-center my-4">
                    <GoldBadge Icon={<GrUserNew className='h-8 w-auto text-yellow-600'/>} />
                  </div>
                <h1 className="text-white/60  text-center">You Successfully earned Welcome Badge</h1>

                <center className='mt-2'>
                  <DashBtns btnText={"View More"}/>
                </center>
            </div>
            <div className="w-full bg-[#292f45] md:ml-2 p-4 rounded-xl shadow-md md:my-0 my-4">
                <h1 className="text-white/60 font-semibold text-xl">Statistics</h1>

                <div className="md:grid grid-cols-4 gap-2">
                    <div className="flex">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashHome