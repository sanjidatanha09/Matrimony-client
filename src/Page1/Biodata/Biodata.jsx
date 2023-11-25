import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Biodata3 from './Biodata3';
import Swal from 'sweetalert2';
import useDetails from '../../hook/useDetails';
import { AuthContext } from '../../Providers.jsx/AuthProvider';
import axios from 'axios';


const Biodata = () => {
  

    const [tab, setTab] = useState(0);
 

    const Data = useLoaderData();
    console.log(Data)

   

    
    

    const [bioDatas, setBiodatas] = useState(Data); 
   
    const Dhaka = Data.filter(tabbs => tabbs.Division === 'Dhaka')
    const Chittagong = Data.filter(tabbs => tabbs.Division === 'Chittagong')
    const Barisal = Data.filter(tabbs => tabbs.Division === 'Barisal')
    const Khulna = Data.filter(tabbs => tabbs.Division === 'Khulna')
    const Rangpur = Data.filter(tabbs => tabbs.Division === 'Rangpur')
    const Maymensing = Data.filter(tabbs => tabbs.Division === 'Maymensing')
    const Sylhet = Data.filter(tabbs => tabbs.Division === 'Sylhet')
    const Female = Data.filter(tabbs => tabbs.Biodata_type === 'Female')
    const Male = Data.filter(tabbs => tabbs.Biodata_type === 'Male')
    const Age = Data.filter(item => item.Age > 20)

    const handleAddBio = event => {
        event.preventDefault();
        const form = event.target;
        



        const Biodata_id = form.Biodata_id.value;
        const Biodata_type = form.Biodata_type.value;
        
        const Profile_img = form.Profile_img.value;
        const Division = form.Division.value;
        const  Age = form. Age.value;
        const Occupation = form.Occupation.value;
        

        const newdata = {
            Biodata_id, Biodata_type , Profile_img ,Division , Age ,Occupation }

        console.log(newdata);

        //send data to the server 
        fetch('http://localhost:5000/postdatas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newdata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }

  

    



    return (
        <div className='pt-20  p-4'>
            <div className="mb-10  w-full mx-auto max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleAddBio} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                        Add BioData
                    </h5>
                    <div>
                        <div className='flex gap-2'>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="Id"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Biodata Id
                                </label>
                                <input
                                    type="number"
                                    name="Biodata_id"
                                    id="Biodata_id"
                                    placeholder="Biodata_id"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required=""
                                />
                            </div>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Biodata type
                                </label>
                                <input
                                    type="text"
                                    name="Biodata_type"
                                    id="Biodata_type"
                                    placeholder="Biodata_type"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className='flex gap-2 mt-2'>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Profile_img
                                </label>
                                <input
                                    type="text"
                                    name="Profile_img"
                                    id="Profile_img"
                                    placeholder="Profile_img"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required=""
                                />
                            </div>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Division
                                </label>
                                <input
                                    type="text"
                                    name="Division"
                                    id="Division"
                                    placeholder="Division"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className='flex gap-2 mt-2'>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Age 
                                </label>
                                <input
                                    type="number"
                                    name="Age"
                                    id="Age "
                                    placeholder="Age"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required=""
                                />
                            </div>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Occupation
                                </label>
                                <input
                                    type="text"
                                    name="Occupation"
                                    id="Occupation"
                                    placeholder="Occupation"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required=""
                                />
                            </div>
                        </div>
                        
                    </div>
                    
                   
                    <div className='flex gap-2 w-[350px] mx-auto'>
                       
                           <Link to='/'>
                            <button


                                type="submit"
                                className="w-[150px] text-white bg-[#66451c] hover:bg-[#c79354] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                view Profile
                            </button></Link>
                        
                      
                        <button
                            type="submit"
                            className="w-full text-white bg-[#66451c] hover:bg-[#977f7f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit Bio
                        </button>
                    </div>
                   
                </form>
            </div>


          <div>
                <Tabs selectedIndex={tab} onSelect={(index) => setTab(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Chittagong</Tab>
                        <Tab>Barisal</Tab>
                        <Tab>Khulna</Tab>
                        <Tab>Rangpur</Tab>
                        <Tab>Maymensing</Tab>
                        <Tab>Sylhet</Tab>
                        <Tab>Female</Tab>
                        <Tab>Male</Tab>
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
                </Tabs>

                


          </div>

           
           
               
  
            
          

        </div>
    );
};

export default Biodata;