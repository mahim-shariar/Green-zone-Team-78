import React, { useState } from 'react';
import { useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const stripePromise = loadStripe('pk_test_51JwKFACJo2X6Dye8vl3cCixoBnRnsDag5Nv4nb817m69g5AFgIDcZmhlYEZuCMJuOdls72YR0Z714YgsVldlYOBB00wRNwLR8J');

const Payment = () => {
    const {productId} = useParams();
    const [order, setOrder] = useState({});
    // console.log(order);
    useEffect( () => {
        fetch(`http://localhost:5000/confirmOrder/${productId}`)
        .then(res => res.json())
        .then(data => setOrder(data));
    }, [productId])

    return (
        <div>
            <h2 className='text-success'>Please Pay for: {order._id}</h2>
            <h4 className='text-black mb-3'>Net Payable: ${order.price}</h4>
            <h4 className='text-danger mb-3'>Please Enter Your Card Number</h4>
            {order?.price && <Elements stripe={stripePromise}>
                <CheckOutForm order={order} ></CheckOutForm>
            </Elements>}
        </div>
    );
};

export default Payment;