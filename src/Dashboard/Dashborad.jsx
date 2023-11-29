import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hook/useAdmin';
import { AuthContext } from '../Providers.jsx/AuthProvider';

const Dashborad = () => {

    const [isAdmin] = useAdmin();
    console.log(isAdmin)
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className='lg:flex lg:max-w-7xl mx-auto min-h-screen bg-[#fff9f9]'>

            {/* sidebar content */}
            <div className=' lg:w-64  min-h-full bg-[#d89849] '>

                <ul className='menu text-center p-5  text-sm lg:font-bold lg:text-xl text-white'>
                    {
                        isAdmin ?<>

                            <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/adminhome'>Admin Home</NavLink></li>


                            <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/manageuser'>Manage Users</NavLink></li>

                            <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/approvedpremium'>Approved Premium</NavLink></li>

                            <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/approvedcontactrequest'>Approved Contact Request</NavLink></li>

                            <li
                                className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/story'>Success Story</NavLink></li>
                            
                            <li
                             className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/'>LogOut</NavLink></li>


                            <hr className='my-10 ' />

                            <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/'>Home</NavLink></li>

                            <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/biodata'>BioDatas</NavLink></li>


                        </>:<>


                                {/* <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/userhome'>User Home</NavLink></li> */}


                                <li className=' p-2  rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/editbio'>Edit Biodata</NavLink></li>

                                <li className='  p-2   rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/viewbio'>View Biodata</NavLink></li>

                                <li className='  p-2   rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/mycontactrequest'>My Contact Request</NavLink></li>
                                <li className='  p-2   rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/favbio'>Favourites Biodata</NavLink></li>
                                <li className='  p-2   rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/dashboard/married'>Got Married</NavLink></li>


                                <li className='  p-2   rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/'>LogOut</NavLink></li>


                                <hr className='my-10 ' />

                                <li className='  p-2   rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/'>Home</NavLink></li>

                                <li className='  p-2   rounded-xl mb-2  bg-[#2c1c08]'><NavLink to='/biodata'>BioDatas</NavLink></li>
                        
                        </>
                    }
                   
                   

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