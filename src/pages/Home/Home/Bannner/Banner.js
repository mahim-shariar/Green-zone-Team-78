import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
// import BannerImage from '../../../../image/house-g737061b63_1281.jpg';
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
            <>  <Grid container spacing={2} sx={{ mt: 2, p: 7 }}>
                  <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                        <Typography variant='h3' style={{ fontWeight: '800',color:'#edb859' }}>
                              <span style={{ color: '#4e1900d6', fontWeight: '900', fontSize: '80px' }}>Mordern</span> <br /> Wooden Houses
                        </Typography>
                        <Typography variant='h6' sx={{color:''}} >
                              We are always ready to deliver quality
                              wooden house to you.
                        </Typography>
                        <Link to='/explores' style={{ textDecoration: 'none' }}> <Button sx={{ backgroundColor: '#a71324', color: 'white', border: 'solid 1px #a71324', marginY: 3 }} variant="outlined" className='btn-style' size="large">
                              Explore More
                        </Button>
                        </Link>
                  </Grid>
                  <Grid item xs={12} md={6}>
                        <img height='100%' width='100%' src='https://houzbuzz.com/wp-content/uploads/2015/10/constructia-unei-case-din-lemn-pas-cu-pas-How-to-build-a-wooden-house-step-by-step-980x600.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2' alt="" />
                  </Grid>
            </Grid>
                  <Grid container spacing={2} sx={{ py:4,backgroundColor: '#1f1a17' }}>
                        <Grid item xs={12} md={2}>
                              <img src={offers1} alt="" />
                              <Typography variant='h6' sx={{ color: 'white' }}>Eco Materials</Typography>
                              <Link style={{ textDecoration: 'none' }} to='/ecomaterials'> <Button sx={{ backgroundColor: '#a71324', color: 'white', border: 'solid 1px #a71324', marginY: 3, textDecoration: 'none' }}>Available Items</Button></Link>
                        </Grid>
                        <Grid item xs={12} className='my-2' md={2}>
                              <img src={offers2} alt="" />
                              <Typography variant='h6' sx={{ color: 'white' }}>Solar Energy</Typography>
                              <Link style={{ textDecoration: 'none' }} to='/solarenergy'><Button sx={{ backgroundColor: '#a71324', color: 'white', border: 'solid 1px #a71324', marginY: 4, textDecoration: 'none' }}>Available Items</Button></Link>
                        </Grid>
                        <Grid item xs={12} md={2}>
                              <img src={offers3} alt="" />
                              <Typography variant='h6' sx={{ color: 'white' }}>Furniture</Typography>
                              <Link style={{ textDecoration: 'none' }} to='/furniture'><Button sx={{ backgroundColor: '#a71324', color: 'white', border: 'solid 1px #a71324', marginY: 3, textDecoration: 'none' }}>Available Items</Button></Link>
                        </Grid>
                        <Grid item xs={12} md={2}>
                              <img src={offers4} alt="" />
                              <Typography variant='h6' sx={{ color: 'white' }}>Bathroom Feetings</Typography>
                              <Link style={{ textDecoration: 'none' }} to='/bathroomfeetings'><Button sx={{ backgroundColor: '#a71324', color: 'white', border: 'solid 1px #a71324', marginY: 3, textDecoration: 'none' }}>Available Items</Button></Link>
                        </Grid>
                        <Grid item xs={12} md={2}>
                              <img src={offers5} alt="" />
                              <Typography variant='h6' sx={{ color: 'white' }}>CCTV Reply</Typography> <br />
                              <Link style={{ textDecoration: 'none' }} to='/cctv'><Button sx={{ backgroundColor: '#a71324', color: 'white', border: 'solid 1px #a71324', marginY: 3, textDecoration: 'none' }}>Available Items</Button></Link>
                        </Grid>
                        <Grid item xs={12} md={2}>
                              <img src={offers6} alt="" />
                              <Typography variant='h6' sx={{ color: 'white' }}>Interior Design</Typography>
                              <Link style={{ textDecoration: 'none' }} to='/interior'><Button sx={{ backgroundColor: '#a71324', color: 'white', border: 'solid 1px #a71324', marginY: 3, textDecoration: 'none' }}>Available Items</Button></Link>
                        </Grid>
                  </Grid> </>
      );
};

export default Banner;