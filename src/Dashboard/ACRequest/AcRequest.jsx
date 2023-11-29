import React from 'react';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AcRequest = () => {

    const axiosSecure = useAxiosSecure();

    const { data: ContactRequest = [], refetch } = useQuery({

        queryKey: ['approvecontact32'],
        queryFn: async () => {
            const res = await axiosSecure.get('getpayments');
            return res.data;
        }

    })

    console.log(ContactRequest)

    const handleStatusApproved = contactRequ => {


        axiosSecure.patch(`/patchcontact/request/${contactRequ._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${contactRequ.name} request accept`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }

    return (
        <div>
            <h1>{ContactRequest.length}</h1>

            <div className='mt-10'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                               
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Bio Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                   Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                ContactRequest.map((contactRequ, index) => <tr
                                    key={contactRequ._id}>


                                    {/* <td className="px-6 py-4">{index + 1}</td> */}
                                    <td className="px-6 py-4">{contactRequ.name}</td>
                                    <td className="px-6 py-4">{contactRequ.email}</td>
                                    <td className="px-6 py-4">{contactRequ.menuItemId}</td>

                                    <td className="px-6 py-4">
                                        {
                                            contactRequ.action === 'approve' ? 'Approved' :
                                                <button
                                                    onClick={() => handleStatusApproved(contactRequ)}
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                >
                                                    Approved Requ
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

export default AcRequest;