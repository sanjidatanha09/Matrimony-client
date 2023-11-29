import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers.jsx/AuthProvider";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useCart from "../../hook/useCart";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Checkoutform = () => {
    const check = useLoaderData()
    const [checks]= useState(check);
    // console.log(checks)
    const [transactionId, setTransactionId] = useState(' ');
  
    const axiosSecure = useAxiosSecure();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const { user } = useContext(AuthContext)

    const [clientSecret, setClientSecret] = useState('');
    const totalPrice = 500
    // console.log(totalPrice)



    
  

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', {addfee :totalPrice})
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
        }



    }, [axiosSecure,totalPrice])
  



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

        //confirm payment 
        const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    email:user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',

                }
            }
        })

        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log('payment intent', paymentIntent)

            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id',paymentIntent.id);
                setTransactionId(paymentIntent.id)

                //now save the payment 
                const payment = {
                    email:user?.email,
                  transactionId:paymentIntent.id,
                    name:checks?.Biodata_name,
                    mobile: checks?.MNumber,
                    addfee: totalPrice,
                    date:new Date(), //utc date convert
                    cartId: checks?._id,
                    menuItemId: checks?.BioId,
                    status:'Pending'
                }

                const res =await axiosSecure.post('/payments',payment);
                console.log('payment save',res.data);
                if (res.data?.paymentResult?.insertedId){
                    Swal.fire({
                        title: "Good job!",
                        text: "successfully payment!",
                        icon: "success"
                    });
                    navigate('/dashboard/mycontactrequest')
                }
            }
        }



        

        

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
              
               
                
              


                <button className="text-white bg-[#66451c]  hover:bg-[#b49875] rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold  text-sm px-5 py-2.5 text-center me-2 mb-2  mt-5" type="submit" disabled={!stripe || !clientSecret}>Submit</button>


                

                <p className="text-lg text-red-500">
                    {error}
                </p>

                {transactionId && <p className="text-green-600">your transactionId : {transactionId}</p>}

                




            </form>
        </div>
    );
};

export default Checkoutform;