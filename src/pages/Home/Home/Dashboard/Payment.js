import React, { useState } from 'react';
import { useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Typography } from '@mui/material';


const stripePromise = loadStripe('pk_test_51JwKFACJo2X6Dye8vl3cCixoBnRnsDag5Nv4nb817m69g5AFgIDcZmhlYEZuCMJuOdls72YR0Z714YgsVldlYOBB00wRNwLR8J');

const Payment = () => {
    const {productId} = useParams();
    const [order, setOrder] = useState({});
    console.log(order);

    useEffect( () => {
        fetch(`https://stormy-wave-87937.herokuapp.com/confirmOrder/${productId}`)
        .then(res => res.json())
        .then(data => setOrder(data));
    }, [productId])

    return (
        <div style={{backgroundColor:'#184375',height:'90vh'}}>
            <Typography variant='h4' style={{ color: 'white' }}>Please Pay for</Typography>
            <img height='200px' src={order.image} alt="" />
            <Typography variant='h6' style={{ color: 'white' }}>Net Payable: ${order.price}</Typography>
            <Typography variant='h4' style={{ color: 'white' }}>~Please Enter Your Card Number~</Typography>
            {order?.price && <Elements stripe={stripePromise}>
                <CheckOutForm order={order} ></CheckOutForm>
            </Elements>}
        </div>
    );
};

export default Payment;