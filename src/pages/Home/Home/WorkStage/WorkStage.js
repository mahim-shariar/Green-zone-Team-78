import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import imgHouse from '../../../../image/image-house.png';

const WorkStage = () => {
    return (
        <Container sx={{ mt: 8, p: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                    <Typography variant='h4'
                        sx={{
                            color: '#544438',
                            fontWeight: '900'
                        }}>Stages of <span
                            style={{ color: '#e1c265' }}>Build</span>
                    </Typography>
                    <Typography variant='h6'
                        sx={{ color: '#544438' }}>We select the most high-quality wood materials, which have a very long life in any climatic conditions..
                    </Typography>
                    <Button className='btn-style' variant="outlined" sx={{ backgroundColor: '#a71324', color: 'white', border: 'solid 1px #a71324', marginY: 5, marginTop: 3 }} >Order Now</Button>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img
                        className='img-fluid'
                        src={imgHouse}
                        alt="" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <img
                        className='img-fluid rounded mx-auto '
                        style={{ marginTop: '18%', marginLeft: '60px' }}
                        src='https://images-ext-2.discordapp.net/external/iqUvAPN5AUMd5tbwIImtfrQyoxV9MeW_BvJpXsr2w-Q/https/www.bootsontheroof.com/wp-content/uploads/2019/05/shutterstock_382064023-1024x683.jpg?width=400&height=267'
                        alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default WorkStage;