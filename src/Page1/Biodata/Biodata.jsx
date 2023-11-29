import React, { useContext, useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Biodata3 from './Biodata3';
import Swal from 'sweetalert2';
import useDetails from '../../hook/useDetails';
import { AuthContext } from '../../Providers.jsx/AuthProvider';
import axios from 'axios';
import AllBio2 from '../DetailsBio/AllBio2';

const itemsPerPages = 3;

const Biodata = () => {
    // const itemsPerPages =10;

    // const numberOfPages = Math.ceil(Data.length / itemsPerPages);

    // const pages = []
    // for(let i=0;i<numberOfPages;i++){
    //     pages.push(i)

    // }
    // console.log(pages);
  

    const [tab, setTab] = useState(0);
    console.log(tab)

    const Data = useLoaderData();
    

    // const [data,setData] = useState([]);
    // useEffect(() =>{
    //     const pagination =async ()=>{
    //         const res = await fetch('https://assignment12-server-alpha.vercel.app/datas')
    //         const data = res.json()
    //         setData(data)

    //     }
    //     pagination()
    // },[])


    const [bioDatas, setBiodatas] = useState(Data); 
    console.log(bioDatas)
   
    const Dhaka = Data.filter(tabbs => tabbs.Division === 'Dhaka')
    const Chittagong = Data.filter(tabbs => tabbs.Division === 'Chittagong')
    const Barisal = Data.filter(tabbs => tabbs.Division === 'Barisal')
    const Khulna = Data.filter(tabbs => tabbs.Division === 'Khulna')
    const Rangpur = Data.filter(tabbs => tabbs.Division === 'Rangpur')
    const Maymensing = Data.filter(tabbs => tabbs.Division === 'Maymensing')
    const Sylhet = Data.filter(tabbs => tabbs.Division === 'Sylhet')
    const Female = Data.filter(tabbs => tabbs.Biodata_type === 'Female')
    const Male = Data.filter(tabbs => tabbs.Biodata_type === 'Male')
    const Age = Data.filter(tabbs => tabbs.Age > 20)
   
  


  

    



    return (
        <div className='pt-20  p-4'>
           


          <div>
                <Tabs selectedIndex={tab} onSelect={(index) => setTab(index)}>
                    <TabList>
                        <Tab>Dhaka</Tab>
                        <Tab>Chittagong</Tab>
                        <Tab>Barisal</Tab>
                        <Tab>Khulna</Tab>
                        <Tab>Rangpur</Tab>
                        <Tab>Maymensing</Tab>
                        <Tab>Sylhet</Tab>
                        <Tab>Female</Tab>
                        <Tab>Male</Tab>
                        <Tab>Age</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 gap-6'>
                            {
                                Dhaka.map(tabbs => <Biodata3 key={tabbs._id} tabbs={tabbs}></Biodata3>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 gap-6'>
                            {
                                Chittagong.map(tabbs => <Biodata3 key={tabbs._id} tabbs={tabbs}></Biodata3>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 gap-6'>
                            {
                                Barisal.map(tabbs => <Biodata3 key={tabbs._id} tabbs={tabbs}></Biodata3>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 gap-6'>
                            {
                                Khulna.map(tabbs => <Biodata3 key={tabbs._id} tabbs={tabbs}></Biodata3>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 gap-6'>
                            {
                                Rangpur.map(tabbs => <Biodata3 key={tabbs._id} tabbs={tabbs}></Biodata3>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 gap-6'>
                            {
                                Maymensing.map(tabbs => <Biodata3 key={tabbs._id} tabbs={tabbs}></Biodata3>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 gap-6'>
                            {
                                Sylhet.map(tabbs => <Biodata3 key={tabbs._id} tabbs={tabbs}></Biodata3>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 gap-6'>
                            {
                                Female.map(tabbs => <Biodata3 key={tabbs._id} tabbs={tabbs}></Biodata3>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 gap-6'>
                            {
                                Male.map(tabbs => <Biodata3 key={tabbs._id} tabbs={tabbs}></Biodata3>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-3 gap-6'>
                            {
                                Age.map(tabbs => <Biodata3 key={tabbs._id} tabbs={tabbs}></Biodata3>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>

                


          </div>

            <div className=' pl-5 border-l-2 mt-5'>
                <h2 className='text-xl font-bold text-gray-500 text-center mb-5'>Biodata :{bioDatas.length}</h2>
                

                <div>
                    <Swiper
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper w-full lg:w-[900px] mx-auto"
                    >


                       <div>
                            {
                                bioDatas.map(review => <SwiperSlide key={review._id}>

                                    <div className="max-w-sm mx-auto mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <div className='flex m-5 items-center justify-between'>
                                            <div>
                                                <h1 className='text-center font-bold text-xl text-gray-500'>{review.BioId}</h1>
                                                <h1 className='font-bold text-2xl text-gray-500'>{review.Biodata_name}</h1>
                                            </div>
                                            <a href="#">
                                                <img className="rounded-lg h-[100px] w-[120px]" src={review.Profile_img} alt="" />
                                            </a>


                                        </div>
                                        <hr className='' />
                                        <div className="p-5  ">


                                            <h1 className='font-bold text-gray-700 text-sm'>Gender: {review.Biodata_type}</h1>
                                            <h1 className='font-bold text-gray-700 text-sm'>Date of Birth: {review.Date}</h1>
                                            <h1 className='font-bold text-gray-700 text-sm'>Height: {review.Height}</h1>
                                            <h1 className='font-bold text-gray-700 text-sm'>Weight: {review.Weight}</h1>
                                            <h1 className='font-bold text-gray-700 text-sm'>Age: {review.Age}</h1>
                                            <p className='font-bold text-gray-700 text-sm'>Occupation:{review.Occupation}</p>
                                            <p className='font-bold text-gray-700 text-sm'>Race:{review.Race}</p>
                                            <p className='font-bold text-gray-700 text-sm'>Fathers Name:{review.Fname}</p>
                                            <p className='font-bold text-gray-700 text-sm'>Mothers  Name:{review.Mname}</p>


                                            <h1 className='font-bold text-gray-700 text-sm'>Permanent Division : {review.Division}</h1>


                                            <p className='font-bold text-gray-700 text-sm'>Present Division: {review.PDivision}</p>
                                            <p className='font-bold text-gray-700 text-sm'>Expected Partner Age: {review.Partner_age}</p>
                                            <p className='font-bold text-gray-700 text-sm'>Expected Partner Height: {review.Partner_height}</p>
                                            <p className='font-bold text-gray-700 text-sm'>Expected Partner Weight: {review.Partner_weight}</p>
                                            <p className='font-bold text-gray-700 text-sm'>Contact Email: {review.email}</p>
                                            <p className='font-bold text-gray-700 text-sm'>Mobile Number: {review.MNumber}</p>

                                            <div>
                                                <Link to='/detailsBio'>
                                                    <button





                                                        className="mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#66451c] rounded-lg hover:bg-[#917757] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                    >
                                                        Premium Profile
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
                                                </Link>

                                                <button





                                                    className="mt-5 ml-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#66451c] rounded-lg hover:bg-[#917757] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                >
                                                    Edit Profile
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




                                </SwiperSlide>)
                            }

                       </div>

                    </Swiper>
                </div>
            </div>
           
            
           
           
               
  
            
          

        </div>
    );
};

export default Biodata;