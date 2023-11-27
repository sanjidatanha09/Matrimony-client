import React from 'react';
import Swal from 'sweetalert2';

const GotMarried = () => {
    const handleAddStory = event => {
        event.preventDefault();
        const form = event.target;



        const Self_Biodata_number = form.Self_Biodata_number.value;
        const Partner_Bio_number = form.Partner_Bio_number.value;
        const Couple_img = form.Couple_img.value;
        const Star = form.Star.value;
        const MarriageDate = form.MarriageDate.value;
        const textfield = form.textfield.value;
       
        


        const newdata = {
            Self_Biodata_number, Partner_Bio_number, Couple_img, Star, MarriageDate, textfield
        }

        console.log(newdata);

        //send data to the server 
        fetch('http://localhost:5000/clientstorypost', {
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
                        text: 'BioData Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }
    return (
        <div>
            <div>
                <div className="my-10  w-full mx-auto max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleAddStory} className="space-y-6" action="#">
                        <h5 className="text-xl text-center font-medium text-gray-500 dark:text-white">
                            Story Review
                        </h5>
                        <div>
                            <div className='flex gap-2'>
                                <div className='w-1/2'>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Self Biodata Number
                                    </label>
                                    <input
                                        type="number"
                                        name="Self_Biodata_number"
                                        id="Biodata_number"
                                        placeholder="Self_Biodata_number"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div className='w-1/2'>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        partner Biodata Number
                                    </label>
                                    <input
                                        type="number"
                                        name="Partner_Bio_number"
                                        id="Partner_Bio_number"
                                        placeholder="Partner_Bio_number"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='flex gap-2 mt-2'>
                                <div className='w-1/2'>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Couple Image
                                    </label>
                                    <input
                                        type="text"
                                        name="Couple_img"
                                        id="Couple_img"
                                        placeholder="Couple_img"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div className='w-1/2'>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Review Star
                                    </label>
                                    <input
                                        type="number"
                                        name="Star"
                                        id="star"
                                        placeholder="Star"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='w-full mt-2'>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Marriage Date
                                </label>
                                <input
                                    type="date"
                                    name="MarriageDate"
                                    id="date"
                                    placeholder="date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                           
                          

                            <div className='mt-2'>
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                   Story Review
                                </label>
                                <textarea
                                    id="message"
                                    name='textfield'
                                    rows={4}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Write your thoughts here..."
                                    defaultValue={""}
                                />
                            </div>


                        </div>


                        <div className=' gap-2 w-[350px] mx-auto'>




                            <button
                                type="submit"
                                className="w-full text-white bg-[#66451c] hover:bg-[#977f7f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Submit Now
                            </button>
                        </div>

                    </form>
                </div>

            </div>
            
        </div>
    );
};

export default GotMarried;