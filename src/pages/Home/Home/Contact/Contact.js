import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import iconPhone from '../../../../image/icon-img/icon-phone.png';
import './../Products/Products.css';

const Contact = () => {
    return (
        <div style={{ backgroundColor: '#e1c265', padding: '5%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Typography variant='h5' sx={{ color: 'white', fontWeight: '800' }}>24/7 Call Center</Typography>
                    <Typography variant='h4' sx={{ color: '#544438', fontWeight: '900' }}>Need a consultation?</Typography>
                </Grid>
                <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                    <img src={iconPhone} alt="" />
                    <Typography variant='h3' sx={{ color: 'white', fontWeight: '900' }}>+8801700000000</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <NavLink style={{textDecoration:'none'}}
                        to='/contact' >
                        <Button size="large" className='btn-style'
                            variant="outlined" sx={{ backgroundColor: '#574437', color: 'white', border: 'solid 1px #574437', marginTop: 2 }}>
                            Contact Us
                        </Button>
                    </NavLink>
                </Grid>
            </Grid>
        </div>
    );
};

export default Contact;