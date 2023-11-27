import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers.jsx/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import useDetails from '../../hook/useDetails';
import usePremium from '../../hook/usePremium';

const AllBio = ({ Bios }) => {
    const { Biodata_name, Biodata_type, Profile_img, Division, Age, Occupation, Height, Date, Weight, Race, Fname, Mname, PDivision, Partner_age, Partner_height, Partner_weight, MNumber, email, _id, BioId } = Bios;
    const [isPremium] = usePremium();
    console.log(isPremium);




    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()


    const [, refetch] = useDetails();

    const handledetailspage = () => {

        if (user && user.email) {

            const profiledetails = {
                profileId: _id,
                email: user.email,

                Age,
                Biodata_type,
                Division,
                Occupation,
                Profile_img,
                MNumber,
                Biodata_name,
                Height,
                Date,
                Weight,
                Race,
                Fname,
                Mname,
                PDivision,
                Partner_age,
                Partner_height,
                Partner_weight,
                BioId



            }
            axios.post('http://localhost:5000/profiledetails', profiledetails)
                .then(res => {
                    console.log(res.data)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    //refetch the details page
                    refetch()
                })


        }
        else {
            Swal.fire({
                title: "you are not logged in",
                text: "please login to add to the details bio",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });

        }

    }
    return (
        <div className='mb-5'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className='flex m-5 items-center justify-between'>
                    <h1 className='font-bold text-2xl text-gray-500'>{Biodata_name}</h1>
                    <a href="#">
                        <img className="rounded-lg h-[100px] w-[120px]" src={Profile_img} alt="" />
                    </a>


                </div>
                <hr className='' />
                <div className="p-5  ">


                    <h1 className='font-bold text-gray-700 text-sm'>Gender: {Biodata_type}</h1>
                    <h1 className='font-bold text-gray-700 text-sm'>Date of Birth: {Date}</h1>
                    <h1 className='font-bold text-gray-700 text-sm'>Height: {Height}</h1>
                    <h1 className='font-bold text-gray-700 text-sm'>Weight: {Weight}</h1>
                    <h1 className='font-bold text-gray-700 text-sm'>Age: {Age}</h1>
                    <p className='font-bold text-gray-700 text-sm'>Occupation:{Occupation}</p>
                    <p className='font-bold text-gray-700 text-sm'>Race:{Race}</p>
                    <p className='font-bold text-gray-700 text-sm'>Fathers Name:{Fname}</p>
                    <p className='font-bold text-gray-700 text-sm'>Mothers  Name:{Mname}</p>


                    <h1 className='font-bold text-gray-700 text-sm'>Permanent Division : {Division}</h1>


                    <p className='font-bold text-gray-700 text-sm'>Present Division: {PDivision}</p>
                    <p className='font-bold text-gray-700 text-sm'>Expected Partner Age: {Partner_age}</p>
                    <p className='font-bold text-gray-700 text-sm'>Expected Partner Height: {Partner_height}</p>
                    <p className='font-bold text-gray-700 text-sm'>Expected Partner Weight: {Partner_weight}</p>
                    {
                        isPremium?<>

                            <p className='font-bold text-gray-700 text-sm'>Contact Email: {email}</p>
                            <p className='font-bold text-gray-700 text-sm'>Mobile Number: {MNumber}</p>
                        </>:
                        <>
                              <Link to='/checkout'>
                                    <button





                                        className="mr-2 mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#66451c] rounded-lg hover:bg-[#917757] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Contact Request
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
                        
                        </>
                    }

                    <button
                    onClick={handledetailspage}

                        



                        className="mt-5 mr-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#66451c] rounded-lg hover:bg-[#917757] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Favourite Profile
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
    );
};

export default AllBio;