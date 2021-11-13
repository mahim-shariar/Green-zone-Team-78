import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyAllOrders from './MyAllOrders';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
        
    },[user.email])

    return (
        <Container>
            <h2>Here Is my all Orders {orders?.length}</h2>
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