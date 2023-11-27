import React from 'react';

const DetailsBioCard = ({ tabbs }) => {
    const { Age, Biodata_name, Biodata_type, Division, Occupation, Profile_img, _id } = tabbs;
    console.log(tabbs)
    return (

        <div className=''>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <div className='flex m-5 items-center justify-between'>

                    <di >

                        <h1 className='font-bold text-sm text-gray-500'>{Biodata_name}</h1>


                    </di>
                    <a href="#">
                        <img className="rounded-lg h-[100px] w-[120px]" src={Profile_img} alt="" />
                    </a>


                </div>
                <hr className='' />
                <div className="p-5 ">


                    <h1 className='font-bold text-gray-700 text-sm'>Gender: {Biodata_type}</h1>


                    <h1 className='font-bold text-gray-700 text-sm'>Age: {Age}</h1>
                    <p className='font-bold text-gray-700 text-sm'>Occupation:{Occupation}</p>



                    <h1 className='font-bold text-gray-700 text-sm'>Permanent Division : {Division}</h1>






                    <button

                        className="mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#66451c] rounded-lg hover:bg-[#917757] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        view Profile
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
                    </button>

                </div>
            </div>

        </div>
    );
};

export default DetailsBioCard;