import React, { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



const Successtory = () => {

    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/clientreview')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    console.log(reviews)


    return (
        <div className='my-12 '>

            
            
            <div className='text-3xl text-center mb-16'>
                <h1 className='text-[#C48C46] text-2xl mb-2' >Trusted Brand</h1>
                <p className='text-[#66451c] font-bold text-4xl'>Trust By 1500+ Couples</p>
            </div>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper w-full lg:w-[900px] "
            >

                
                {
                    reviews.map(review => <SwiperSlide key={review._id}>


                        <div>
                            <img className='w-full lg:w-[650px] mx-auto rounded-xl h-[250px]' src={review.Profile_img} alt="" />

                            <div className='text-center mb-16'> 
                                <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-72 my-6 '>
        
                                    <Rating
                                       style={{maxWidth: 180}}
                                       value = {review.Star}
                                       readOnly
                                    />
                                    <p className='font-bold text-2xl text-gray-700'>{review.Date}</p>
                                </div>
                                <p className='text-gray-500'>{review.Story}</p>

                            </div>
                           
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Successtory;