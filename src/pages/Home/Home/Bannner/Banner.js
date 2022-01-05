import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import BannerImage from '../../../../image/house-g737061b63_1281.jpg';
// import bg from '../../../../image/wood-g8358d2b1b_1280.jpg';
import offers1 from '../../../../image/icon-img/service-icon-1.png';
import offers2 from '../../../../image/icon-img/service-icon-2.png';
import offers3 from '../../../../image/icon-img/service-icon-3.png';
import offers4 from '../../../../image/icon-img/service-icon-4.png';
import offers5 from '../../../../image/icon-img/service-icon-5.png';
import offers6 from '../../../../image/icon-img/service-icon-6.png';
import { Link } from 'react-router-dom';
import './Banner.css'

// const style = {
//       backgroundImage: `url(${bg})`,
//       backgroundAttachment: 'fixed',
//       backgroundSize:'cover'
// }

const Banner = () => {
    return (
      <>  <Grid container spacing={2} sx={{my:3,p:10,pt:5}}>
        <Grid item xs={12} md={6} sx={{mt:8}}>
         <Typography variant='h3' style={{fontWeight:'800'}}>
            <span style={{color:'black',fontWeight:'900',fontSize:'80px'}}>Craft</span> <br /> Wooden Houses      
         </Typography>
         <Typography variant='h6'>
             We are always ready to deliver quality
             wooden house to you.
         </Typography>
        <Link to='/explores' style={{textDecoration:'none'}}> <Button className='btn-style' sx={{color:'white',mt:3,backgroundColor:'#a71324',border:'1px solid #a71324'}} variant="outlined" size="large">
          Explore More
        </Button>
        </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <img height='100%' width='100%' src={BannerImage} alt="" />
         </Grid>
      </Grid>
      <Grid container spacing={2} sx={{backgroundColor:'#1f1a17'}}>
      <Grid item xs={12} md={2}>
            <img src={offers1} alt="" />
            <Typography variant='h6' sx={{ color: 'white' }}>Eco Materials</Typography>
            {/* <Button sx={{backgroundColor:'#e1c265'}}>Available Items</Button> */}
      </Grid>
      <Grid item xs={12} md={2}>
            <img src={offers2} alt="" />
            <Typography variant='h6' sx={{ color: 'white' }}>Solar Energy</Typography>
            {/* <Button sx={{backgroundColor:'#e1c265'}}>Available Items</Button> */}
      </Grid>
      <Grid item xs={12} md={2}>
            <img src={offers3} alt="" />
            <Typography variant='h6' sx={{ color: 'white' }}>Furniture</Typography>
            {/* <Button sx={{backgroundColor:'#e1c265'}}>Available Items</Button> */}
      </Grid>
      <Grid item xs={12} md={2}>
            <img src={offers4} alt="" />
            <Typography variant='h6' sx={{ color: 'white' }}>Water Supply</Typography>
            {/* <Button sx={{backgroundColor:'#e1c265'}}>Available Items</Button> */}
      </Grid>
      <Grid item xs={12} md={2}>
            <img src={offers5} alt="" />
            <Typography variant='h6' sx={{ color: 'white' }}>CCTV Reply</Typography>
            {/* <Button sx={{backgroundColor:'#e1c265'}}>Available Items</Button> */}
      </Grid>
      <Grid item xs={12} md={2}>
            <img src={offers6} alt="" />
            <Typography variant='h6' sx={{ color: 'white' }}>Interior Design</Typography>
            {/* <Link to='/interior'><Button sx={{backgroundColor:'#e1c265'}}>Available Items</Button></Link> */}
       </Grid>
       </Grid> </>
    );
};

export default Banner;