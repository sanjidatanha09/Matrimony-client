import { Carousel } from "flowbite-react";


const Banner = () => {
    return (
        <div className=' rounded-xl relative'>
            <div className=''>
                <Carousel className='h-[450px] lg:h-[600px]'>
                    <img src="https://i.ibb.co/LkBpprY/photo-1616165415772-f5b95c3ae135-q-80-w-1000-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="..." />

                    <img src="https://i.ibb.co/9WRjMJP/Manor-By-The-Lake-Asian-Wedding-Photography-31.jpg" alt="..." />
                    <img src="https://i.ibb.co/8DGnC1k/unsplash-image-1-Bs2s-Z9f-D2-Q.jpg" alt="..." />
                    <img src="https://i.ibb.co/z7LzMd1/1552561678-i-x-Lvm-Dxd-X2.jpg" alt="..." />
                    <img src="https://i.ibb.co/P44j87h/pppp-819x1024.jpg" alt="..." />
                </Carousel>
            </div>


            {/* <div className='text-center  lg:text-3xl  absolute bottom-96 md:bottom-96  lg:bottom-40  p-4 md:left-32 left-3 lg:left-96 bg-opacity-40 bg-black rounded-xl w-[400px] md:w-[500px] lg:w-[800px] mx-auto  text-[#e2d0ba] mb-5 md:mb-0 lg:mb-0 lg:ml-40'>
                <h1 className='lg:text-6xl text-2xl font-bold mb-3'>#1 Matrimony</h1>
                <h1 className='font-bold'>Find Your Right s Match Here</h1>
                <h2 className='font-bold pb-3'>Most Trusted Matrimony Brand in the World</h2>
               <div>
                    <button
                        type="button"
                        className="text-white bg-[#66451c] hover:bg-[#c5965c] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Men/Women
                    </button>
                    <button
                        type="button"
                        className="text-white bg-[#66451c] hover:bg-[#c5965c] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                       Age
                    </button>
                    <button
                        type="button"
                        className="text-white bg-[#66451c] hover:bg-[#c5965c] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Religion
                    </button>
                    <button
                        type="button"
                        className="text-white bg-[#66451c] hover:bg-[#c5965c] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                       Location
                    </button>
                    <button
                        type="button"
                        className="text-white bg-[#66451c] hover:bg-[#c5965c] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Serach
                    </button>
               </div>
               
            </div> */}
            
        </div>
    );
};

export default Banner;