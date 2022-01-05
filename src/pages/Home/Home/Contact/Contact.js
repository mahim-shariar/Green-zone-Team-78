import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
// import iconPhone from '../../../../image/icon-img/icon-phone.png';
import './../Products/Products.css';

const Contact = () => {
    return (
        <div style={{ backgroundColor: '#54afb7e6', padding: '5%' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h2' className='rounded p-1 ' sx={{ color: 'white', fontWeight: '800' }}>24/7 Call Center</Typography>
                        <Typography variant='h4' sx={{color: 'white', fontWeight: '900' }}>Need a <span className='text-warning' > consultation?</span> </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button size="large" className='btn-style'
                            variant="outlined" sx={{ backgroundColor: '#a71324', color: 'white', border: 'solid 1px #574437', marginTop: 2 }}>
                            <a style={{textDecoration:'none',color: 'white'}} href="#contact"> Contact Us</a>
                        </Button>
                        <Typography variant='h4' sx={{ color: 'white', fontWeight: '700', mt: 2 }}> +8801700000000</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Contact;