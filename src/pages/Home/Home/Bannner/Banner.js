import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Bannerimage from '../../../../image/house-g737061b63_1281.jpg';


const Banner = () => {
    return (
        <Grid container spacing={2} sx={{mt:9,backgroundColor:'gray',p:10}}>
        <Grid item xs={12} md={6} sx={{mt:8}}>
         <Typography variant='h3' sx={{color:'white'}}>
            <span style={{color:'#e1c265',fontWeight:'900',fontSize:'80px'}}>Craft</span> <br /> Wooden Houses      
          </Typography>
         <Typography variant='body1' sx={{color:'whitesmoke'}}>
             We are always ready to deliver quality
             wooden house to you.
         </Typography>
         <Button sx={{color:'white',mt:3,backgroundColor:'#e1c265'}} variant="outlined" size="large">
          Explore More
        </Button>       
        </Grid>
        <Grid item xs={12} md={6}>
          <img height='100%' width='100%' src={Bannerimage} alt="" />
         </Grid>
         </Grid>
    );
};

export default Banner;