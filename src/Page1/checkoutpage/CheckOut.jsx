import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "./Checkoutform";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useCart from "../../hook/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);


const CheckOut = () => {

    const handleAddpay = event => {
        event.preventDefault();
        const form = event.target;

        const price = form.price.value;
        
        const newdata = {
            price
        }

        console.log(newdata);

        //send data to the server 
        fetch('http://localhost:5000/postpayment', {
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
        <div className="min-h-screen pt-20 md:w-[500px] lg:w-[600px] mx-auto">
            

            <form onSubmit={handleAddpay}>


                <div className='w-1/2 mx-auto mb-5'>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-xl font-bold text-gray-500 dark:text-white text-center "
                    >
                        payment
                    </label>
                    <input
                        type="number"
                        name="price"
                        id="pay"

                        placeholder="pay"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    />
                    <button className="text-white bg-[#66451c]  hover:bg-[#b49875] rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold  text-sm px-5 py-2.5 text-center me-2 mb-2  mt-5" type="submit">Submit</button>

                </div>
            </form>
            <h1 className='mb-5 text-center font-bold text-xl text-gray-500'> Checkout Form</h1>

            <div>
                <Elements stripe={stripePromise}>

                    <Checkoutform></Checkoutform>

                </Elements>
            </div>
        </div>
    );
};

export default CheckOut;