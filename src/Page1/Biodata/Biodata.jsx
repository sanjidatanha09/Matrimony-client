import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Biodata3 from './Biodata3';


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
    // const Age = Data.filter(item => item.Division === 'Dhaka')
    
   



    return (
        <div className='pt-20 lg:flex p-4'>

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