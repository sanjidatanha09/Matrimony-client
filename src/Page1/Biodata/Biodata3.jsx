import React from 'react';

const Biodata3 = ({ tabbs }) => {

    const { Age, Biodata_id, Biodata_type, Division, Occupation, Profile_img } = tabbs;



    return (
        <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-[260px] w-[400px]" src={Profile_img} alt="" />
                </a>
                <div className="p-5 text-center ">
                    <h1 className='text-center font-bold text-2xl text-gray-500'>{Biodata_id}</h1>

                    <h1 className='font-bold text-gray-700 text-xl'>Gender: {Biodata_type}</h1>
                    <h1 className='font-bold text-gray-700 text-xl'>Division : {Division}</h1>

                    <p className='font-bold text-gray-700 text-xl'>Occupation:{Occupation}</p>
                    <p className='font-bold text-gray-700 text-xl'>Age : {Age}</p>

                    <a
                        href="#"
                        className="mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#66451c] rounded-lg hover:bg-[#917757] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read more
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Biodata3;