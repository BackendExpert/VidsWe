import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsChevronUp, BsChevronDown, BsGearFill, BsList, BsSpeedometer2, BsX, BsPersonFill, BsPeople, BsCameraVideoFill } from "react-icons/bs";
import secureLocalStorage from "react-secure-storage";
import SiteLogo from '../../assets/Logo.png'
import { LiaPhotoVideoSolid } from "react-icons/lia";

const DashSide = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const RoleUser = secureLocalStorage.getItem("Login2");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (id) => {
    setSubmenuOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const logout = () => {
    localStorage.clear();
    navigate('/SignIn')
    window.location.reload();
  };

  // Filtered menu based on roles
  const SideMenu = [
    { id: 1, name: "Dashboard", link: '/Dashboard/Home', icon: <BsSpeedometer2 className='h-5 w-auto fill-[#fdbd44] hover:fill-white' /> },
    { id: 2, name: "My Channel", link: '/Dashboard/MyChannel', icon: <LiaPhotoVideoSolid className='h-5 w-auto fill-[#fdbd44] hover:fill-white' /> },
    {
      id: 3, name: "Videos", icon: <BsCameraVideoFill className='h-5 w-auto fill-[#29c770]' />, submenu: [
        { id: 1, name: "Create Videos", link: '/Dashboard/NewVideos' },
        { id: 2, name: "Public Videos", link: '/Dashboard/MyPublicVideos' },
        { id: 3, name: "Private Videos", link: '/Dashboard/MyPrivateVideos' },
        { id: 4, name: "Achive Videos", link: '/Dashboard/MyAchiveVideos' },
      ]
    },
    {
      id: 4, name: "Users", icon: <BsPeople className='h-5 w-auto fill-[#00B0FF]' />, submenu: [
        { id: 1, name: "SuperAdmin", link: '/Dashboard/SuperAdmins' },
        { id: 2, name: "User", link: '/Dashboard/User' },
      ]
    },
    { id: 5, name: "Profile", link: '/Dashboard/Profile', icon: <BsPersonFill className='h-5 w-auto fill-[#00B000]' /> },
    { id: 6, name: "Settings", link: '/Dashboard/Settings', icon: <BsGearFill className='h-5 w-auto fill-[#ce4f52]' /> },
  ];

  const filteredMenu = SideMenu.filter((menu) => {
    if (RoleUser === "User") {
      return !(menu.id === 4);
    }
    return true;
  });

  return (
    <div>
      <button className="md:hidden fixed top-20 right-4 z-50 bg-blue-600 text-white p-2 rounded font-semibold" onClick={toggleSidebar}>
        {!isOpen ? <BsList /> : <BsX />}
      </button>
      <div className={`md:min-w-74 md:max-w-64 w-full md:w-auto h-screen md:relative fixed top-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="md:bg-transparent bg-[#141c30] py-2 text-white">
          <div className="my-4">
            <div className="flex">
                <img src={SiteLogo} alt="" className='h-20 w-auto rounded-full' />
                <h1 className="text-xl mt-6 font-semibold text-purple-500">VidsWe.com</h1>
            </div>
            <div className="text-center">
              <h1 className=""></h1>
              <p className=""></p>
            </div>
          </div>

          {/* This div is now scrollable */}
          <div className="h-full overflow-y-auto hide-scrollbar">
            {filteredMenu.map((menu) => (
              <MenuComponent
                key={menu.id}
                menu={menu}
                isActive={location.pathname === menu.link}
                submenuOpen={submenuOpen}
                toggleSubmenu={toggleSubmenu}
                navigate={navigate}
              />
            ))}
            <p className="mx-4 mt-4 text-red-600 cursor-pointer" onClick={logout}>
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuComponent = ({ menu, isActive, submenuOpen, toggleSubmenu, navigate }) => (
  <div>
    <div
      className={`my-2 duration-300 py-1 pl-6 px-4 pb-2 flex items-center justify-between cursor-pointer mx-2 rounded-xl ${isActive ? 'bg-[#7466f1]' : 'hover:bg-[#9e94f5]/40 hover:shadow-md'}`}
      onClick={() => menu.submenu ? toggleSubmenu(menu.id) : navigate(menu.link)}
    >
      <div className="flex">
        <div className="pt-1 pr-2">{menu.icon}</div>
        <div className="pt-1">{menu.name}</div>
      </div>
      {menu.submenu && (
        <div className="text-white">
          {submenuOpen[menu.id] ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      )}
    </div>
    {menu.submenu && submenuOpen[menu.id] && (
      <div className="my-4">
        <div className="bg-[#3c4565] mx-4 rounded-md shadow-md py-1">
          {menu.submenu.map((submenu) => (
            <Link to={submenu.link} key={submenu.id}>
              <div className={`my-2 duration-300 hover:bg-[#7466f1] rounded-md py-1 px-2 text-sm ${isActive ? 'bg-white' : ''}`}>
                <p className="pl-6">{submenu.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default DashSide;