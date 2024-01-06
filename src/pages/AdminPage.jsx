import React, { useState } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaUser } from "react-icons/fa";
import { FaClinicMedical } from "react-icons/fa";
import Analytics from '../components/Dashboard/Analytics';
import Logo from '../assets/logo/logo1.png';
import Users from '../components/Users/Users';
import Entities from '../components/Clinics/Clinics';
import { Avatar } from '@mui/material';
import { RiProfileLine } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";



export default function AdminPage() {

  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);

  const toggleLogoutModal = () => setShowLogoutModal(prev => !prev);


  // useEffect(() => {
  //     if(!user || !user?.isAuthenticated) {
  //         navigate("/");
  //     } else {
  //         setIsLoading(false);
  //     }
  // }, [user]);

  // const logoutHandler = async () => {
  //     try {
  //         await logout();
  //     } catch(err) {
  //         console.warn(err);
  //     } finally {
  //         deleteAll();
  //         setUser(null);
  //         toggleLogoutModal();
  //         setTimeout(() => {
  //             navigate("/");
  //         }, 2000);
  //     }
  // }

  const toggleAvatarDropdown = () => {
      if (isAvatarDropdownOpen) {
          setIsAvatarDropdownOpen(false);
      } else {
          setIsAvatarDropdownOpen(true);
      }
  };

  const closeAvatarDropdown = () => {
      setIsAvatarDropdownOpen(false);
  };


  const links = [
    {
      id: 1,
      routes: '/admin',
      icon: <MdOutlineDashboard />,
      label: 'Dashboard',
      viewEnabled: true,
    },
    {
      id: 2,
      routes: '/admin/clinics',
      icon: <FaClinicMedical />,
      label: 'Entities',
      viewEnabled: true,
    },
    {
      id: 3,
      routes: '/admin/users',
      icon: <FaUser />,
      label: 'Users',
      viewEnabled: true,
    },
  ];

  return (
    <main className='flex'>
      {/* Sidebar */}
      <div className='px-2 py-4'>
            <div className='bg-[#28282B] border rounded-lg w-[170px] h-[780px] max-h-screen'>
                {/* Sidebar content */}
                <div className='flex flex-col items-center h-20 py-4'>
                    <div>
                        <img
                            src={Logo}
                            alt="Logo"
                            className='h-16 w-auto'
                        />
                    </div>
                    <div className='flex items-end justify-end'>
                        <p className='text-2xl font-extrabold font-new uppercase text-white'>Arc</p>
                    </div>
                </div>
                <div>
                <ul className="w-full px-6 py-12">
                            {links.map((nav) => {
                            if (nav.viewEnabled) {
                                return (
                                    <NavLink
                                        key={nav.id}
                                        to={nav.routes}
                                        end
                                        className={({ isActive }) =>
                                            isActive ? "text-blue-500 tracking-wide" : "text-white hover:text-blue-200 tracking-wide"
                                        }
                                    >
                                        <li className="flex justify-start items-center py-3 text-md font-light">
                                            {nav.icon}
                                            <p className='ml-3'>{nav.label}</p>
                                        </li>
                                    </NavLink>
                                );
                            }
                            })}
                        </ul>
                </div>
            </div>
      </div>
      {/* Routes */}
        <div className='flex-1 flex-row justify-between'>
            <div className="w-full drop-shadow-lg border-b border-stone-200 h-16">
                    <div className='absolute right-6 top-3'>
                        <div className="relative inline-block">
                            <Avatar onClick={toggleAvatarDropdown} />
                            {isAvatarDropdownOpen && (
                                <div className="absolute right-0 mt-1 w-32 cursor-pointer bg-white border rounded-md shadow-md overflow-hidden">
                                    {/* Dropdown content goes here */}
                                    <div className="py-2 gap-2 justify-center items-center flex flex-col">
                                    <div className='flex flex-row justify-center items-center gap-2'>
                                        <RiProfileLine />
                                        <p className="text-black hover:text-blue-500 font-normal" onClick={() => { navigate('/admin/profile'); closeAvatarDropdown(); }}>Profile</p>
                                    </div>
                                    <div className='flex flex-row justify-center items-center gap-2'>
                                        <IoLogOut />
                                        <p className="text-black hover:text-red-500 font-normal" onClick={() => { toggleLogoutModal(); closeAvatarDropdown(); }}>Logout</p>
                                    </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
            </div>
            <div className='p-4'>
                <Routes>
                    <Route index element={<Analytics />} />
                    <Route path="clinics" element={<Entities />} />
                    <Route path="users" element={<Users />} />
                </Routes>
            </div>
        </div>
    </main>
  );
}
