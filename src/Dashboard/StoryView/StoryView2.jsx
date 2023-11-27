import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const StoryView2 = () => {
    
    const nansi = useLoaderData();
    console.log(nansi)

  

    return (
        <div className='my-12 '>



            <div className='text-3xl text-center mb-16'>
                <h1 className='text-[#C48C46]
              text-2xl mb-2' >Trusted Brand</h1>
                <p className='text-[#66451c] font-bold text-xl lg:text-4xl'>Trust By 1500+ Couples</p>
            </div>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper w-full lg:w-[900px] "
            >


              <SwiperSlide key={nansi._id}>


                        <div>
                            <img className='w-full lg:w-[500px] mx-auto rounded-xl h-[380px]' src={nansi.Couple_img} alt="" />

                            <div className='text-center mb-16'>
                                <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-48 my-8 '>

                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={nansi.Star}
                                        readOnly
                                    />
                                    <p className='font-bold text-2xl text-gray-700'>{nansi.MarriageDate}</p>
                                </div>
                                <p className='text-gray-500 lg:w-[550px] mx-auto'>{nansi.textfield}</p>

                            </div>

                        </div>
                    </SwiperSlide>
            


            </Swiper>
        </div>
    );
};

export default StoryView2;