import React, { useState } from 'react';
import useDetails from '../hook/useDetails';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DetailsBioCard from './DetailsBioCard';
import AllBio from './DetailsBio/AllBio';
import { useLoaderData } from 'react-router-dom';


const DetailsBio = () => {
    

    const details= useLoaderData();
    const [tab, setTab] = useState(0);

   
    console.log(details)

    const Male = details.filter(tabbs => tabbs.Biodata_type === 'Male')
    const Female = details.filter(tabbs => tabbs.Biodata_type === 'Female')

    return (
        <div className='min-h-screen lg:flex justify-between pt-10'>
           <div className='lg:w-1/2 pr-2'>
                <Tabs selectedIndex={tab} onSelect={(index) => setTab(index)}>
                    <TabList>
                        <Tab>Male</Tab>
                        <Tab>Female</Tab>
                        
                    </TabList>
                    
                   
                    <TabPanel>
                        <div className='grid lg:grid-cols-2 gap-6'>
                            {
                                Male.map(tabbs => <DetailsBioCard key={tabbs._id} tabbs={tabbs}></DetailsBioCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid lg:grid-cols-2 gap-6'>
                            {
                                Female.map(tabbs => <DetailsBioCard key={tabbs._id} tabbs={tabbs}></DetailsBioCard>)
                            }
                        </div>
                    </TabPanel>
                    
                   
                    
                </Tabs>

                

           </div>
           <div className='lg:w-1/2 pl-5 border-l-2 '>
                <h2 className='text-xl font-bold text-gray-500 text-center mb-5'>Biodata :{details.length}</h2>
                
                <div className='lg:w-[400px] mx-auto'>
                    
                    {
                        details.map(Bios => <AllBio
                            key={Bios.Biodata_id}
                            Bios={Bios}

                        ></AllBio>)
                    }
                </div>
           </div>
        </div>
    );
};

export default DetailsBio;