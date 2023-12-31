import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers.jsx/AuthProvider";


const Navvar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navLinks = <>



        <li className="block font-bold py-2 px-3 text-gray-500 rounded hover:bg-[#66451c] md:hover:bg-transparent md:hover:text-[#66451c] lg:hover:bg-[#66451c] lg:hover:text-white lg:hover:p-1 md:p-0 md:dark:hover:text-[#66451c] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">

            <NavLink to="/">

                Home

            </NavLink></li>


        <li className="block lg:hover:bg-[#66451c] lg:hover:text-white lg:hover:p-1 font-bold py-2 px-3 text-gray-500 rounded hover:bg-[#66451c] md:hover:bg-transparent md:hover:text-[#66451c] md:p-0 md:dark:hover:text-[#66451c] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">

            <NavLink to="/biodata">BioDatas</NavLink></li>

        <li className="block lg:hover:bg-[#66451c] lg:hover:text-white lg:hover:p-1 font-bold py-2 px-3 text-gray-500 rounded hover:bg-[#66451c] md:hover:bg-transparent md:hover:text-[#66451c] md:p-0 md:dark:hover:text-[#66451c] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">

            <NavLink to="/detailsBio">Details Bio</NavLink></li>


        <li className="block lg:hover:bg-[#66451c] lg:hover:text-white lg:hover:p-1 font-bold py-2 px-3 text-gray-500 rounded hover:bg-[#66451c] md:hover:bg-transparent md:hover:text-[#66451c] md:p-0 md:dark:hover:text-[#66451c] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            <NavLink to="/about">About Us</NavLink></li>




        <li className="block lg:hover:bg-[#66451c] lg:hover:text-white lg:hover:p-1 font-bold py-2 px-3 text-gray-500 rounded hover:bg-[#66451c] md:hover:bg-transparent md:hover:text-[#66451c] md:p-0 md:dark:hover:text-[#66451c] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">


            <NavLink to="/contact">Contact Us</NavLink></li>

       

        {
            user?.email ? <>
                <li className="block lg:hover:bg-[#66451c] lg:hover:text-white lg:hover:p-1 font-bold py-2 px-3 text-gray-500 rounded hover:bg-[#66451c] md:hover:bg-transparent md:hover:text-[#66451c] md:p-0 md:dark:hover:text-[#66451c] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">


                    <NavLink to="dashboard">Dashboard</NavLink></li>

            </>

                :
                <li></li>
        }

    


    </>


    return (
        <div className='mb-20 bg-slate-300'>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div
                       
                        className="md:mx-auto lg:mx-0 flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://i.ibb.co/JyG2nXg/wp11202266.jpg"
                            className=" h-[50px] w-[50px] rounded-full"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-gray-500  font-bold whitespace-nowrap dark:text-white uppercase">
                            Wedding <span className='text-[#66451c]'>Matrimony</span>
                        </span>
                    </div>
                    <div className=" flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div className="">
                            {
                                user ? <>


                                    <button onClick={handleLogOut}
                                        type="button"
                                        className="text-white  bg-[#66451c] hover:bg-[#b99c78] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-xl lg:text-xl px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Logout
                                    </button>



                                </> : <>

                                    <Link to='/login'>
                                        <button
                                            type="button"
                                            className="text-white  bg-[#66451c] hover:bg-[#b99c78] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Login
                                        </button>
                                    </Link>



                                </>
                            }


                        </div>
                  

             
                           
                    </div>




                    <div
                        className="items-center justify-between flex w-auto order-1"
                        id="navbar-sticky"
                    >
                        <ul className="flex text-xs md:text-sm md:font-medium  border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row mt-0 border-0 dark:bg-gray-800 md:dark:bg-gray-900  dark:border-gray-700">
                            {navLinks} 
                     


                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Navvar;