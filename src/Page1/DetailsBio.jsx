import React from 'react';
import useDetails from '../hook/useDetails';

const DetailsBio = () => {

    const [details] = useDetails();
    return (
        <div className='min-h-screen flex justify-between pt-10'>
           <div>
                d
d
           </div>
           <div>
                <h2>Biodata :{details.length}</h2>
           </div>
        </div>
    );
};

export default DetailsBio;