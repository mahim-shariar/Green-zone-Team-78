import { Avatar, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './../Products/Products.css'


//Single Product Function
const SingleProduct = (props) => {
    const { name, description, image, price, discountPrice, _id } = props.product;
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{p:6,backgroundColor:"#e1dada"}} >
            <Avatar
              alt="Remy Sharp"
              src={image}
              sx={{ width: 200, height: 200,m:'auto'}}
             />
                <Typography variant='h5'
                    sx={{
                        fontWeight: '900',
                        color: '#574437'
                    }}>
                    {name}
                </Typography> <hr />
                
                <Typography variant='body2'
                    sx={{ color: 'black' ,fontWeight:300}}>
                    {description.slice(0, 250)}
                    ..<italic style={{color:'#a71324',fontWeight:600}}>Read More</italic>
                </Typography>
                
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}>
                    <Typography variant='h5'>
                        <s className='text-muted' style={{
                                 fontWeight: '900',
                                 color: 'black'
                                }}>${price}</s>
                    </Typography>
                    
                    <Typography variant='h5'
                        sx={{
                            fontWeight: '900',
                            color: '#99402c'}}>
                    ${discountPrice}
                    </Typography>
                    
                </div>
                <Link to={`/purchaseProducts/${_id}`} style={{textDecoration:'none'}}>
                <Button
                    className='btn-style'
                    variant="outlined" sx={{ backgroundColor: '#a71324', color: 'white', border: 'solid 1px #6b9080', marginY: 3 }}>Purchase Now</Button>
                </Link>
         </Paper>
    </Grid>
    );
};

export default SingleProduct;