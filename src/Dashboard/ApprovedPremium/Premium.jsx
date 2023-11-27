import React from 'react';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const Premium = () => {

    const axiosSecure = useAxiosSecure();

    const { data: premiumdata = [], refetch } = useQuery({

        queryKey: ['premiumuser'],
        queryFn: async () => {
            const res = await axiosSecure.get('datas');
            return res.data;
        }

    })

    console.log(premiumdata)

    const handleMakepremium = PPremiumuser => {


        axiosSecure.patch(`/patchpremium/premium/${PPremiumuser._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${PPremiumuser.Biodata_name} is an premium now`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }



    return (
        <div>

            <div className='mt-10'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                   Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                   Make Premium
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>

                            {
                                premiumdata.map((PPremiumuser, index) => <tr
                                    key={PPremiumuser._id}>


                                    <td className="px-6 py-4">{index + 1}</td>
                                    <td className="px-6 py-4">{PPremiumuser.Biodata_name}</td>
                                    <td className="px-6 py-4">{PPremiumuser.email}</td>
                                    
                                    <td className="px-6 py-4">
                                        {
                                            PPremiumuser.action === 'premium' ? 'Premium' :
                                                <button
                                                    onClick={() => handleMakepremium(PPremiumuser)}
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                >
                                                    Make Premium
                                                </button>
                                        }
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

export default Premium;