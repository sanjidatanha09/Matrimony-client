import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashborad = () => {
    return (
        <div className='flex max-w-7xl mx-auto min-h-screen bg-[#fff9f9]'>

            {/* sidebar content */}
            <div className='w-64 min-h-full bg-[#d89849] '>

                <ul className='menu text-center p-5  font-bold text-xl text-white'>
                    <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/userhome'>User Home</NavLink></li>

                    <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/cart'>my cart</NavLink></li>

                    <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/editbio'>Edit Biodata</NavLink></li>

                    <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/viewbio'>View Biodata</NavLink></li>

                    <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/contactrequest'>My Contact Request</NavLink></li>
                    <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/favouritebio'>Favourites Biodata</NavLink></li>
                    <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/logout'>LogOut</NavLink></li>


                    <hr className='my-10 ' />

                    <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/'>Home</NavLink></li>

                    <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/biodata'>BioDatas</NavLink></li>
                   

                </ul>
            </div>

            {/* dashboard content  */}
           

            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashborad;