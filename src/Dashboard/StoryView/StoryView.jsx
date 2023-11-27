import React from 'react';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const StoryView = () => {
    const axiosSecure = useAxiosSecure();

    const { data: Story = [], refetch } = useQuery({

        queryKey: ['getstory'],
        queryFn: async () => {
            const res = await axiosSecure.get('clientreview');
            return res.data;
        }

    })
    console.log(Story)
    return (
        <div>
            <div className='mt-10'>
                <h1 className='text-center font-bold text-gray-500 text-2xl'>All users :{Story.length} </h1>
                
               

                <div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        SL
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Male Biodata Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Female Biodata Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                       Action
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    Story.map((getuser, index) => <tr
                                        key={getuser._id}>


                                        <td className="px-6 py-4">{index + 1}</td>
                                        <td className="px-6 py-4 text-center">{getuser.Self_Biodata_number}</td>
                                        <td className="px-6 py-4 text-center">{getuser.Partner_Bio_number}</td>
                                        
                                        <td className="px-6 py-4">
                                            {/* <div className="card-actions justify-end">
                                                <Link to={`/singlefood/${_id}`}>
                                                    <button className='btn btn-warning text-white font-bold'>Details</button>
                                                </Link>

                                            </div> */}
                                            <Link to={`/dashboard/clientreview/${getuser._id}`}>
                                                <button

                                                    href="#"
                                                    className="font-medium text-[#66451c] dark:text-blue-500 hover:underline"
                                                >
                                                   View Story
                                                </button>
                                           </Link>
                                        </td>
                                    </tr>)
                                }





                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default StoryView;