import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers.jsx/AuthProvider";
import useAxiosSecure from "../../hook/useAxiosSecure";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useCart from "../../hook/useCart";


const Checkoutform = () => {
    const axiosSecure = useAxiosSecure();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const { user } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState('');
    const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    console.log(totalPrice)
  
  




   

    useEffect(() => {
        // if (totalPrice > 0) {
        axiosSecure.post('/create-payment-intent')
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
        // }



    }, [axiosSecure])
  



    const handleSubmit = async (event)=>{
        event.preventDefault();

        if (!stripe || !elements) {
            return

        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod);
            setError('');
        }

        //you tube
        // if(!error){
        //     try{
        //         const {id} = paymentMethod
        //         const response = await axios.post('http://localhost:5000/create-payment-intent',{
        //             amount:1000,
        //             id
        //         })
        //         if(response.data.success){
        //             console.log('success payment ')
        //             setSuccess(true)
        //         }



        //     }catch (error){
        //         console.log(error.message)

        //     }
        // }
        // else{
        //     console.log('error',error)
        // }
//end youtube

        

    }
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}


                ></CardElement>
                <div className=" mt-5">
                    <div className='w-full'>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            defaultValue={user?.email}
                            disabled
                            placeholder="Email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required=""
                        />
                    </div>
                   

                </div>
               
                
                <div className='flex gap-2 mt-5'>
                    <div className='w-1/2'>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                        >
                            Biodata Id
                        </label>
                        <input
                            type="number"
                            name="Biodata_id"
                            id="Biodata_id"
                            placeholder="Biodata_id"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required=""
                        />
                    </div>

                    <div className='w-1/2'>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                        >
                            Self BioData Id
                        </label>
                        <input
                            type="number"
                            name="selfbioid"
                            id="selfbioid"
                           
                            placeholder="self bio id"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required=""
                        />
                    </div>
                </div>


                <button className="text-white bg-[#66451c]  hover:bg-[#b49875] rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold  text-sm px-5 py-2.5 text-center me-2 mb-2  mt-5" type="submit" disabled={!stripe}>Submit</button>


                

                <p className="text-lg text-red-500">
                    {error}
                </p>

                




            </form>
        </div>
    );
};

export default Checkoutform;