import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers.jsx/AuthProvider';

const EditBio = () => {
    const { user } = useContext(AuthContext); 

    const handleAddBio = event => {
        event.preventDefault();
        const form = event.target;



        const Biodata_name = form.Biodata_name.value;
        const Biodata_type = form.Biodata_type.value;
        const Profile_img = form.Profile_img.value;
        const Division = form.Division.value;
        const Age = form.Age.value;
        const Occupation = form.Occupation.value;

        const Height = form.Height.value;
        const Date = form.Date.value;
        const Weight = form.Weight.value;
        const Race = form.Race.value;
        const Fname = form.Fname.value;
        const Mname = form.Mname.value;
        const PDivision = form.PDivision.value;
        const Partner_age = form.Partner_age.value;
        const Partner_height= form.Partner_height.value;
        const Partner_weight = form.Partner_weight.value;
        const email = user?.email;
        const MNumber= form.MNumber.value;
        const BioId = form.BioId.value;
       


 
        const newdata = {
            Biodata_name, Biodata_type, Profile_img, Division, Age, Occupation, Height, Date, Weight, Race, Fname, Mname, PDivision, Partner_age, Partner_height, Partner_weight, MNumber, email, BioId
        }

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
                        text: 'BioData Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }
    return (
        <div>
            <div className="my-10  w-full mx-auto max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleAddBio} className="space-y-6" action="#">
                    <h5 className="text-xl text-center font-medium text-gray-500 dark:text-white">
                        Add BioData
                    </h5>
                    <div>
                        <div className='flex gap-2'>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Biodata Name
                                </label>
                                <input
                                    type="text"
                                    name="Biodata_name"
                                    id="Biodata_name"
                                    placeholder="Biodata_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
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
                                    Profile_img
                                </label>
                                <input
                                    type="text"
                                    name="Profile_img"
                                    id="Profile_img"
                                    placeholder="Profile_img"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Parmanent Division
                                </label>
                                <input
                                    type="text"
                                    name="Division"
                                    id="Parmanent_Division"
                                    placeholder="Division"
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
                                    Age
                                </label>
                                <input
                                    type="number"
                                    name="Age"
                                    id="Age "
                                    placeholder="Age"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
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
                                    Height
                                </label>
                                <input
                                    type="text"
                                    name="Height"
                                    id="height "
                                    placeholder="Height"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                   Date of Birth
                                </label>
                                <input
                                    type="date"
                                    name="Date"
                                    id="date"
                                    placeholder="Date"
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
                                    Weight
                                </label>
                                <input
                                    type="text"
                                    name="Weight"
                                    id="Weight "
                                    placeholder="Weight"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Race
                                </label>
                                <input
                                    type="text"
                                    name="Race"
                                    id="Race"
                                    placeholder="Race"
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
                                   Father's Name
                                </label>
                                <input
                                    type="text"
                                    name="Fname"
                                    id="Fname "
                                    placeholder="Fname"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Mother's Name
                                </label>
                                <input
                                    type="text"
                                    name="Mname"
                                    id="Mname"
                                    placeholder="Mname"
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
                                   Present Division
                                </label>
                                <input
                                    type="text"
                                    name="PDivision"
                                    id="PDivision "
                                    placeholder="PDivision"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Expected partner Age
                                </label>
                                <input
                                    type="number"
                                    name="Partner_age"
                                    id="partner age"
                                    placeholder="Partner age"
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
                                    Expected partner Height
                                </label>
                                <input
                                    type="text"
                                    name="Partner_height"
                                    id="Partner_height "
                                    placeholder="Partner_height"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Expected partner weight
                                </label>
                                <input
                                    type="text"
                                    name="Partner_weight"
                                    id="partner weight"
                                    placeholder="partner weight"
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
                                    Contact Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email "
                                    placeholder="email" disabled defaultValue={user?.email}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Mobile Number
                                </label>
                                <input
                                    type="number"
                                    name="MNumber"
                                    id="number"
                                    placeholder="Mobile Number"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Bio Id
                            </label>
                            <input
                                type="number"
                                name="BioId"
                                id="Bioid "
                                placeholder="BioId" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required
                            />
                        </div>

                    </div>


                    <div className=' gap-2 w-[350px] mx-auto'>

                      


                        <button
                            type="submit"
                            className="w-full text-white bg-[#66451c] hover:bg-[#977f7f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Save & Publish now
                        </button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default EditBio;