import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Typography variant='h4'>Page Not Found!! 404!!</Typography>
            <Link to='/home' style={{textDecoration:'none'}}><Button variant='contained'>Go Back Home</Button></Link>
        </div>
    );
};

export default NotFound;