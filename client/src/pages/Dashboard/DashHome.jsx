import React from 'react'
import { GrUserNew } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'
import DashBtns from '../../components/DashBtns/DashBtns';
import GoldBadge from '../../components/Badges/GoldBadge';
import SilverBadge from '../../components/Badges/SilverBadge';
import BrownBadge from '../../components/Badges/BrownBadge';
import { IoEyeSharp } from "react-icons/io5";
import CountUp from 'react-countup';
import { TbUsersGroup } from "react-icons/tb";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { BiSolidVideos } from "react-icons/bi";
import { BsFillCameraReelsFill } from "react-icons/bs";


const DashHome = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const DashData = [
      {id: 1, name: 'Users', valueData: <CountUp end={100} />, IconBg: 'bg-[#ce4f52]/20', Icon: <TbUsersGroup className='h-6 w-auto text-[#ce4f52]'/>},
      {id: 2, name: 'Channels', valueData: <CountUp end={100} />, IconBg: 'bg-[#00B0FF]/20', Icon: <LiaPhotoVideoSolid className='h-6 w-auto text-[#00B0FF]'/>},
      {id: 3, name: 'Video Views', valueData: <CountUp end={100} />, IconBg: 'bg-yellow-500/20', Icon: <IoEyeSharp className='h-6 w-auto text-yellow-500'/>},
      {id: 4, name: 'Videos', valueData: <CountUp end={100} />, IconBg: 'bg-green-500/20', Icon: <BiSolidVideos className='h-6 w-auto text-green-500'/>},
      {id: 5, name: 'Reels', valueData: <CountUp end={100} />, IconBg: 'bg-pink-500/20', Icon: <BsFillCameraReelsFill className='h-6 w-auto text-pink-500'/>},
      {id: 6, name: 'My Videos', valueData: <CountUp end={100} />, IconBg: 'bg-[#7466f1]/20', Icon: <HiMiniVideoCamera className='h-6 w-auto text-[#7466f1]'/>},
      {id: 7, name: 'My Video Views', valueData: <CountUp end={100} />, IconBg: 'bg-green-500/20', Icon: <IoEyeSharp className='h-6 w-auto text-green-500'/>},
      {id: 8, name: 'My Reels', valueData: <CountUp end={100} />, IconBg: 'bg-pink-500/20', Icon: <BsFillCameraReelsFill className='h-6 w-auto text-pink-500'/>},
    ]
  return (
    <div>
        <div className="md:flex">
            <div className="md:w-1/3 bg-[#292f45] md:mr-2 p-4 rounded-xl shadow-md md:mb-0 mb-2">
                <h1 className="text-white/60 font-semibold text-center">Congratulations {EmailUser}</h1>
                  <div className="flex justify-center my-4">
                    <GoldBadge Icon={GrUserNew} />                    
                  </div>
                <h1 className="text-white/60  text-center">You Successfully earned Welcome Badge</h1>

                <center className='mt-2'>
                  <DashBtns btnText={"View More"}/>
                </center>
            </div>
            <div className="w-full bg-[#292f45] md:ml-2 p-4 rounded-xl shadow-md md:my-0 my-4">
                <h1 className="text-white/60 font-semibold text-xl">Statistics</h1>

                <div className="md:grid grid-cols-4 gap-6 mt-10">
                  {
                      DashData.map((data, index) => {
                          return (
                            <div className="flex md:my-0 my-2" key={index}>
                                <div className={`p-4 ${data.IconBg} rounded-full`}>
                                    {data.Icon}
                                </div>
                                <div className="pl-2">
                                    <h1 className="text-white/50 pt-1 font-semibold">{data.name}</h1>
                                    <p className="">{data.valueData}</p>
                                </div>
                            </div>
                          )
                      })
                  }
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashHome