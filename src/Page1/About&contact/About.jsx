import React from 'react';

const About = () => {
    return (
        <div className='pt-3 lg:flex justify-between items-center min-h-screen gap-5 '>
            <div className='mb-2 w-full lg:w-1/2 text-center font-bold text-gray-500 '>
                <h1 className='lg:text-3xl mb-5'>About us</h1>
                <p>Highlights the background and evolution of the company, including significant milestones and achievements.Introduces key team members, often with brief bios and photos, to humanize the organization.</p>

                <button
                    type="submit"
                    className= " mt-4 w-[200px] text-white bg-[#66451c] hover:bg-[#977f7f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Read More
                </button>
                
            </div>
            <div className='w-full lg:w-1/2 h-full '>

                <img className='h-full rounded-full' src="https://i.ibb.co/0YpzRKV/internship-job-concept-23-2148771677.jpg" alt="" />

            </div>
        </div>
    );
};

export default About;