import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import imgHouse from '../../../../image/image-house.png';
import stageman from '../../../../image/stages-man.png';

const WorkStage = () => {
    return (
        <Container>
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
                            style={{ color: '#e1c265' }}>our work</span>
                    </Typography>
                    <Typography variant='h6'
                        sx={{ color: '#544438' }}>We select the most high-quality wood materials, which have a very long life in any climatic conditions..
                    </Typography>
                    <Button>Order Now</Button>
                </Grid>
            <Grid item xs={12} md={4}>
                    <img
                        height='100%'
                        width='100%'
                        src={imgHouse}
                        alt="" />
           </Grid>
           <Grid item xs={12} md={4}>
           <img src={stageman} alt="" />
           </Grid>
            </Grid>
        </Container>
    );
};

export default WorkStage;