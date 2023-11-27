import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../hook/useAxiosPublic';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Swal from 'sweetalert2';
import axios from 'axios';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const {  data: users = [] ,refetch} = useQuery({

        queryKey: ['getuser'],
        queryFn: async () => {
            const res = await axiosSecure.get('user');
            return res.data;
        }

    })
    console.log(users)


    const handleDlete = getuser =>{


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${getuser._id}`)
                .then(res =>{

                    if(res.data.deletedCount>0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                    }
                    

                })
                
            }
        });

        

    }

    const handleMakeAdmin = getuser =>{

       
        axiosSecure.patch(`/patchuser/admin/${getuser._id}`)
            .then(res => {
                console.log(res.data)
                if(res.data.modifiedCount > 0 ){
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${getuser.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }

    const handleMakepremium = getuser => {


        axiosSecure.patch(`/patchuser/premium/${getuser._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${getuser.name} is an premium now`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }


    return (
        <div className='mt-10'>
            <h1 className='text-center font-bold text-gray-500 text-2xl'>All users :{users.length} </h1>

            <div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    SL
                                </th>
                                <th scope="col" className="px-6 py-3">
                                   User Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    User Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                   Role
                                </th>
                                <th scope="col" className="px-6 py-3">
                                  Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((getuser,index) => <tr
                                    key={getuser._id}>


                                    <td className="px-6 py-4">{index+1}</td>
                                    <td className="px-6 py-4">{getuser.name}</td>
                                    <td className="px-6 py-4">{getuser.email}</td>
                                    <td className="px-6 py-4">
                                        {
                                            getuser.role ==='admin' ? 'Admin':
                                                <button
                                                    onClick={() => handleMakeAdmin(getuser)}
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                >
                                                    Make Admin
                                                </button>
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        {
                                            getuser.action === 'premium' ? 'Premium' :
                                                <button
                                                    onClick={() => handleMakepremium(getuser)}
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                >
                                                    Make Premium
                                                </button>
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                        onClick={() =>handleDlete(getuser)}
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>)
                            }





                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default ManageUsers;