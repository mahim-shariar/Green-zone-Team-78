import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import ManageSingleProduct from './ManageSingleProduct';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);
    useEffect(() => {
        fetch('https://stormy-wave-87937.herokuapp.com/addProducts')
            .then(res => res.json())
            .then(data=>setManageProducts(data))
    },[])
    return (
        <div>
            <Typography variant='h3' sx={{fontWeight:'800',color:'#674437'}}>You Can Managed Your Products from Here</Typography>
            <h2 style={{color:'#674437'}}>Total Products: {manageProducts.length}</h2>  <hr />
            <Container>
                <Grid container spacing={2}>
                    {
                        manageProducts.map(manageProduct => <ManageSingleProduct
                            manageProduct={manageProduct}
                            key={manageProduct._id}
                        >                           
                        </ManageSingleProduct>)
                    }
                </Grid>
            </Container>
        </div>
    );
};
export default ManageProducts;