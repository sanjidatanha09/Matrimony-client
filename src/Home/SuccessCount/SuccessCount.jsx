import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const SuccessCount = () => {

    const axiosSecure = useAxiosSecure();

    const { data: Adminstat = [], refetch } = useQuery({

        queryKey: ['successcount'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stat');
            return res.data;
        }

    })

    return (

        <div className='mt-10'>

            <div>
                <h1 className='text-center font-bold text-3xl text-[#8b5c22]'>Success Counter</h1>
            </div>

            <div className=' lg:flex gap-4 justify-center items-center'>


               



               <Link to=''>
                    <button className="text-white bg-[#66451c]  hover:bg-[#b49875] rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold  text-sm px-5 py-2.5 text-center me-2 mb-2  mt-5" type="submit" >Total Biodata : {Adminstat.biodata} </button>

               </Link>

                <button className="text-white bg-[#66451c]  hover:bg-[#b49875] rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold  text-sm px-5 py-2.5 text-center me-2 mb-2  mt-5" type="submit" >Girls BioData : {Adminstat.femalebio} </button>

                <button className="text-white bg-[#66451c]  hover:bg-[#b49875] rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold  text-sm px-5 py-2.5 text-center me-2 mb-2  mt-5" type="submit" >Boys BioData : {Adminstat.malebio}</button>


                <button className="text-white bg-[#66451c]  hover:bg-[#b49875] rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold  text-sm px-5 py-2.5 text-center me-2 mb-2  mt-5" type="submit" >Total Marriage : {Adminstat.reviewcount}</button>

            </div>
        </div>
    );
};

export default SuccessCount;