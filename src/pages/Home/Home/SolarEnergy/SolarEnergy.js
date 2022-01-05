import { Avatar, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SolarEnergy = (props) => {
    const { name, img, desc, price, stock, _id } = props.solar;
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 6 }}>
                <Avatar
                    alt="Remy Sharp"
                    src={img}
                    sx={{ width: 200, height: 200, m: 'auto' }}
                />
                <Typography variant='h5'
                    sx={{
                        fontWeight: '900',
                        color: '#574437'
                    }}>
                    {name}
                </Typography> <hr />

                <Typography variant='body2'
                    sx={{ color: '#9c5938' }}>
                    {desc.slice(0, 250)}
                    ..<italic style={{ color: 'red' }}>Read More</italic>
                </Typography>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>
                    <Typography variant='p' style={{
                        fontWeight: '900',
                        color: '#99402c'
                    }}>
                        Price: ${price}     ~
                    </Typography>

                    <Typography variant='p'
                        sx={{
                            fontWeight: '900',
                            color: '#99402c'
                        }}>
                        Stock: {stock}
                    </Typography> <br /> <br />
                </div>
                <Link to={`/purchaseSolar/${_id}`} style={{ textDecoration: 'none' }}>
                    <Button
                        className='btn-style' variant="outlined"
                        sx={{ backgroundColor: '#a71324', color: 'white', border: 'solid 1px #a71324', marginY: 3, textDecoration: 'none' }}>Purchase Now</Button>
                </Link>
            </Paper>
        </Grid>
    );
};

export default SolarEnergy;