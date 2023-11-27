import React, { useEffect, useState } from 'react';
import PremiumCard from './PremiumCard';




const PremiumProfile = () => {

    const [weedings, setweeding] = useState([]);
    const premiums = weedings.filter(tabbs => tabbs.action === 'premium')
    useEffect(() => {

        const fetchData = () => {


            fetch('http://localhost:5000/datas')
                .then(res => res.json())
                .then(json => {
                    const result = json.sort((a, b) => b.Age - a.Age)
                    // console.log(result)


                    setweeding(result.slice(0, 6));

                })

                .catch(e => {
                    console.log('error', e)
                })


        }
        fetchData();


    }, []);


    return (
        <div className='mt-20'>

            <div className='text-3xl text-center mb-16'>
                <h1 className='text-[#C48C46] text-2xl mb-2' >Welcome to Wedding Matrimony</h1>
                <p className='text-[#66451c] font-bold text-4xl'>Premium Member Profile</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    premiums.map(weeding => <PremiumCard
                        key={weeding.Biodata_id}
                        weeding={weeding}

                    ></PremiumCard>)
                }

            </div>

        </div>
    );
};

export default PremiumProfile;