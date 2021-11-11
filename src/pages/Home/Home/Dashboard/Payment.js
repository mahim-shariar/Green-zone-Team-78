import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import thanksImage from '../../../../image/Thanks.jpg'

const Payment = () => {
    return (
        <div>
            <h2>--------Our Payment System Is Coming Soon--------</h2>
            <h3>Please,keep some patience.....</h3>
            <h4>Anyway a lot thanks to you and take &hearts;</h4>
            <img height='80%' width='30%' src={thanksImage} alt="" /> <br />
            <Box>
            <Link to='/home'
            style={{textDecoration:'none'}}>
                <Button
                    variant='contained'
                    size='large'>Back Home</Button>
            </Link>
            <div>-------Or-------</div>
            <Link to='/dashboard'
            style={{textDecoration:'none'}}>
                <Button
                    variant='contained'
                    size='large'>Back to Dashboard</Button>
            </Link>
           </Box>
        </div>
    );
};

export default Payment;