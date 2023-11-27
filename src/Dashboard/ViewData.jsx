
import useDetails from '../hook/useDetails';
import ViewDataCard from './ViewDataCard/ViewDataCard';

const ViewData = () => {
    const [details] = useDetails();

    return (
        <div className='m-5'>
            <div className='text-center mb-5 font-bold text-2xl text-gray-500'>
                <h1>Total BioData:{details.length}</h1>
            </div>

            <div className='grid lg:grid-cols-2 '>
                {
                    details.map(Bios => <ViewDataCard
                        key={Bios.Biodata_id}
                        Bios={Bios}

                    ></ViewDataCard>)
                }
            </div>


        </div>
    );
};

export default ViewData;