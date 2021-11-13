import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyAllOrders from './MyAllOrders';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://stormy-wave-87937.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
        
    },[user.email])

    return (
        <Container>
            <h1 style={{color:'#99402c',fontWeight:'900'}}> Please Check Your Orders</h1> <hr />
            <Grid container spacing={2}>
            {
            orders.map(order => <MyAllOrders
            order={order}
            key={order._id}
            ></MyAllOrders>)
            }
           </Grid>
        </Container>
    );
};

export default MyOrders;