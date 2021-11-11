import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import productsBg from '../../../../image/products-bg-2.jpg';

const style = {
    background: `url(${productsBg}),linear-gradient(#43657a,#a4a7ab)`,
    backgroundSize: 'cover',
    backgroundBlendMode:'overlay'
}

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addProducts')
            .then(res => res.json())
            .then(data=>setProducts(data.slice(0,6)))
    },[])
    return (           
        <div style={style}>
             <Container sx={{ flexGrow: 1,p:5}}>
             <Typography variant='h5' sx={{color:'#e4c977'}}>Shop Online</Typography>
             <Typography variant='h3' sx={{mb:6,color:'#fff',fontWeight:900}}>Finished Real Estate</Typography>
            <Grid container spacing={2}>
                {
                    products.map(product => <SingleProduct
                        product={product}
                        key={product._id}></SingleProduct>)
                }
            </Grid>
       </Container>
       </div>
    );
};
export default Products;