import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';
import productsBg from '../../../../image/addProducts-bg.jpg';

const style = {
    background: `url(${productsBg}),linear-gradient(#43657a,#a4a7ab)`,
    backgroundSize: 'cover',
    backgroundBlendMode:'overlay'
}

const Explores = () => {
    const [explores, setExplores] = useState([]);

    useEffect(() => {
        fetch('https://stormy-wave-87937.herokuapp.com/addProducts')
            .then(res => res.json())
            .then(data=>setExplores(data))
    },[])

    return (
        <div style={style}>
             <Container sx={{ flexGrow: 1,p:5}}>
             <Typography variant='h5' sx={{color:'#e4c977'}}>Shop Online</Typography>
             <Typography variant='h3' sx={{mb:6,color:'#fff',fontWeight:900}}>Finished Real Estate</Typography>
            <Grid container spacing={2}>
                {
                    explores.map(explore => <Explore
                        explore={explore}
                        key={explore._id}></Explore>)
                }
            </Grid>
       </Container>
        </div>
    );
};

export default Explores;