import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBeer, FaRegEyeSlash, FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Providers.jsx/AuthProvider';
import { Result } from 'postcss';
import useAxiosPublic from '../hook/useAxiosPublic';




const Registration = () => {
    const axsiosPublic = useAxiosPublic()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const from = location.state?.from?.pathname || '/'

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.displayName, data.photoURL)
                    .then(() => {
                        // creats user entry in the database


                        console.log('user profile update')
                        reset()
                        Swal.fire({
                            title: "Good job!",
                            text: "You clicked the button!",
                            icon: "success"
                        });



                    })
                    .catch(error => console.log(error))

                const userInfo = {
                    name: data.displayName,
                    email: data.email

                }
                axsiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user added to the database')
                            reset();
                            Swal.fire({
                                title: "Good job!",
                                text: "You clicked the button!",
                                icon: "success"
                            });

                            navigate(from, { replace: true });

                        }
                    })

            })
    };





    // const handleRegistration = e => {
    //     e.preventDefault();
    //     console.log(e.currentTarget);
    //     const form = new FormData(e.currentTarget);
    //     const displayName = form.get('displayName')
    //     const photoURL = form.get('photoURL')
    //     const email =form.get('email')
    //     const password = form.get('password')
    //     console.log(displayName, photoURL,email, password);

    //     //reset error
    //     setRegistererror('');


    //     if (password.length < 6) {
    //         setRegistererror('password is less than 6 characters');
    //         return;
    //     }

    //     else if (!/[A-Z]/.test(password)) {
    //         setRegistererror('shoult have atleast one capital letter');
    //         return;
    //     }
    //     else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
    //         setRegistererror('please use spcecial character');
    //         return;
    //     }




    //     //create user
    //     createUser(email, password)
    //         .then(result => {
    //             console.log(result.user);
    //             //new user has been created

    //             const createAt = result.user?.metadata?.creationTime;

    //             const user = { email, createAt: createAt};
    //             navigate(location?.state ? location?.state : '/')

    //             fetch('https://assignment-11-server-smoky-mu.vercel.app/user', {
    //                 method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(user)
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.insertedId) {
    //                         console.log('user added success');
    //                         Swal.fire({
    //                             title: 'Success!',
    //                             text: 'user added successfully',
    //                             icon: 'success',
    //                             confirmButtonText: 'Cool'
    //                         })

    //                     }
    //                 })
    //         })
    //         .catch(error => {
    //             console.error(error)
    //             toast(error.message);

    //         })

    // }

    return (
        <div className='my-16 '>



            <div className='w-[400px] min-h-screen  mx-auto py-20 '>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                            Register to our platform
                        </h5>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="displayName"
                                {...register('displayName', { required: true })}

                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="name"
                                required=""
                            />
                            {errors.displayName && <span className='text-sm text-gray-500'>This field is required</span>}
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                PhotoURL
                            </label>
                            <input
                                type="text"
                                name="photoURL"
                                {...register('photoURL', { required: true })}
                                id="photo"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Photo"
                                required=""
                            />
                            {errors.photoURL && <span className='text-sm text-gray-500'>This field is required</span>}
                        </div>
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
                                {...register('email', { required: true })}
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="name@company.com"
                                required=""
                            />
                            {errors.email && <span className='text-sm text-gray-500'>This field is required</span>}
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
                                {...register('password', { required: true, maxLength: 20, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&])(?=.*[0-9])(?=.*[a-z])/ })}
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required=""
                            />
                            {errors.password?.type === 'required' && <p className='text-sm text-gray-500'>This field is required</p>}

                            {errors.password?.type === 'minLength' && <p className='text-sm text-gray-500'>Must be 6 character</p>}

                            {errors.password?.type === 'maxLength' && <p className='text-sm text-gray-500'>password less than 20 character</p>}
                            {errors.password?.type === 'pattern' && <p className='text-sm text-gray-500'>Type Special character</p>}

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
                            Register to your account
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Already have an account?{" "}
                            <Link to='/login'>
                                <a href="#" className="text-[#66451c] hover:underline dark:text-blue-500">
                                    Login
                                </a>
                            </Link>
                        </div>
                    </form>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Registration;