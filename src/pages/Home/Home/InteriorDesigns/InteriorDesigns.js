import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const InteriorDesigns = () => {
    const [interiorDesigns, setInteriorDesigns] = useState([]);
    
    useEffect(() => {
        fetch('./interior.json')
            .then(res => res.json())
            .then(data => setInteriorDesigns(data));
    },[])

    return (
        <div>
            <Typography variant='h3'>
                Our Available Interior Products
            </Typography>
        </div>
    );
};

export default InteriorDesigns;