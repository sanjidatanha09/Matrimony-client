import React, { useContext } from 'react';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { AuthContext } from '../../Providers.jsx/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MycontactRequ = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);


    const { data: payments = [], refetch } = useQuery({

        queryKey: ['getcontactuser',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/getpayments/${user?.email}`);
            return res.data;
        }

    })
    console.log(payments)
    
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
                               Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mobile NO
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody className='w-[400px] md:w-full lg:w-full'>
                        {

                            payments.map((getcontact, index) => <tr
                                key={getcontact._id}>


                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">{getcontact.name}</td>
                                <td className="px-6 py-4 text-center">{getcontact.menuItemId}</td>

                                

                                {
                                    getcontact.action ? <>

                                        <td className="px-6 py-4 text-center">Approved</td>
                                        
                                            
                                  


                                    </> : <>

                                       
                                            <td className="px-6 py-4 text-center">pending</td>
                                    


                                    </>
                                }

                                {
                                    getcontact.action ? <>

                                        {/* <td className="px-6 py-4">
                                            {getcontact.mobilenumber}
                                        </td> */}
                                        <td className="px-6 py-4">
                                            {getcontact.email}
                                        </td>

                                    </> : <>
                                            <td className="px-6 py-4">
                                              can't see
                                            </td>
                                    </>
                                }
                                {
                                    getcontact.action ? <>

                                        <td className="px-6 py-4">
                                            {getcontact.mobile}
                                        </td>
                                       

                                    </> : <>
                                        <td className="px-6 py-4">
                                            can't see
                                        </td>
                                    </>
                                }

                               


                               
                               
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
                        




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MycontactRequ;