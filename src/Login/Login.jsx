import React, { useContext } from 'react';
import { AuthContext } from '../Providers.jsx/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBeer, FaRegEyeSlash, FaEye } from 'react-icons/fa';
import { FaGithub, FaGofore } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import useAxiosPublic from '../hook/useAxiosPublic';
import useAxiosSecure from '../hook/useAxiosSecure';

const Login = () => {


    const navigate = useNavigate();
    const location = useLocation();
    const axsiosPublic = useAxiosPublic();
    const axiosSecure =useAxiosSecure()

    const from = location.state?.from?.pathname || '/'

    const { user,signIn, googleSignIn } = useContext(AuthContext);

    const handleGoogle = () => {
        googleSignIn().then(result => {
            console.log(result.user)
            toast('user login successfully');
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName

            }
            
            axiosSecure.post('/users',userInfo)
            .then(res =>{
                console.log(res.data);
                navigate(from, { replace: true });
            })
            
        });
    };


    const handleLogin = e =>{

        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "successfully login",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });

                
            })
            

    }
    return (
        <div className='w-[400px] min-h-screen  mx-auto py-20 '>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleLogin} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                        Log in to our platform
                    </h5>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            required=""
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required=""
                        />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    defaultValue=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    required=""
                                />
                            </div>
                            <label
                                htmlFor="remember"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Remember me
                            </label>
                        </div>
                        <a
                            href="#"
                            className="ms-auto text-sm text-[#66451c] hover:underline dark:text-blue-500"
                        >
                            Lost Password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#66451c] text-white  hover:bg-[#66451c]focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Login to your account
                    </button>

                    <div>
                        <h1 className='text-center font-bold text-sm text-gray-600'>or Login with</h1>


                        <div className='flex justify-center gap-5 mt-5 items-center'>
                            <button
                                onClick={handleGoogle}
                                type="button"
                                className="flex items-center text-center justify-center bg-[#66451c] text-white hover:bg-[#66451c] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                <FaGofore></FaGofore> oogle
                            </button>

                            <button
                            
                                type="button"
                                className="flex items-center text-center justify-center bg-[#66451c] text-white hover:bg-[#66451c] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                Github
                            </button>
                        </div>
                       

                    </div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?{" "}
                        <Link to='/register'>
                            <a href="#" className="text-[#66451c] hover:underline dark:text-blue-500">
                                Create account
                            </a></Link>
                    </div>
                </form>
            </div>
            <ToastContainer />

        </div>
    );
};

export default Login;