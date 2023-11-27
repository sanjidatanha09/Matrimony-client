import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Providers.jsx/AuthProvider';

const Favourite = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

   
    const { data: favourite = [], refetch } = useQuery({

        queryKey: ['getfavrt'],
        queryFn: async () => {
            const res = await axiosSecure.get('favget');
            return res.data;
        }

    })
 

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-[400px] md:w-full lg:w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs w-[400px] md:w-full lg:w-full text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='w-[400px] md:w-full lg:w-full'>
                            <th scope="col" className="px-6 py-3">
                                SL
                            </th>
                            <th scope="col text-center" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Biodata Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Permanent Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                               Occupation
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className='w-[400px] md:w-full lg:w-full'>
                        {
                            
                            favourite.map((getuser, index) => <tr
                                    key={getuser._id}>


                                    <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">{getuser.Biodata_name}</td>
                                <td className="px-6 py-4 text-center">{getuser.BioId}</td>
                                    <td className="px-6 py-4">
                                        {getuser.Division}
                                    </td>
                                    <td className="px-6 py-4">
                                       {getuser.Occupation}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>)
                            
                        }
                        {/* <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> */}
                       
                      
                        
                      
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Favourite;