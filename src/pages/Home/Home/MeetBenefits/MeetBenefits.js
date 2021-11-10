import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import meetImg from '../../../../image/benefits-house.png';

const style = {
    color: '#544438',
    fontWeight:'800'
}
const pStyle = {
    color: '#544438'
}

const MeetBenefits = () => {
    return (
        <Container>
            <Typography variant='h6' sx={{color:'#e1c265'}}>BARHOUSE</Typography>
            <Typography variant='h3' sx={{color:'#544438',fontWeight:'900'}}>Meet Our Benefits</Typography>
            <Typography variant='body1' sx={{color:'#544438',mb:10}}>For the long term durability of historical wooden buildings, constructors and users who deal with this subject have to know wood properties exactly.Wood is an organic, hygroscopic and anisotropic material. Its thermal, acoustic, electrical, mechanical, aesthetic, working, etc. properties are very suitable to use it is possible to build a comfortable house using only wooden products.</Typography>
          <Grid container spacing={2}>
             <Grid item xs={12} md={4} sx={{textAlign:'left'}}>
                <Typography variant='h5'style={style}>Professional Builders</Typography> <hr />
                    <Typography variant='body2'style={pStyle}>Purchasing a home is more than an investment for many buyers;A good builder always works directly with you and clears your doubts. They perform timely inspections to ensure everything is done.</Typography>
                    <Typography variant='h5' style={style}>Best Wooden Materials</Typography> <hr />
                    <Typography variant='body2'style={pStyle}>Human beings have a friendly relationship with the tree from the beginning of creation.The role of wood in our daily life is immense.People have been using wood as fuel since ancient times.</Typography>
                    <Typography variant='h5' style={style}>High Speed Construction</Typography> <hr />
                    <Typography variant='body2'style={pStyle}>Wood elements enable rapid building, which in turn leads to more profitable construction projects and shorter investment payback times.because prefabrication reduces some of the most common risks at construction sites. </Typography>
                </Grid>
            <Grid item xs={12} md={4}>
                <img height='100%' width='100%' src={meetImg} alt="" />
            </Grid>
                <Grid item xs={12} md={4} sx={{textAlign:'left'}}>
                    <Typography variant='h5' style={style}>Guarantee of Durability</Typography> <hr />
                    <Typography variant='body2' style={pStyle}>It is vital that the timber you choose is suitable for the project’s location.In order to ensure the correct timber is selected, both durability and use class play an important part in the decision process.</Typography>
                    <Typography variant='h5' style={style}>Individual Approach</Typography> <hr />
                    <Typography variant='body2' style={pStyle}>Within the wood supply chain, the measurement of roundwood plays a key role due to its high economic impact.In Central Europe, it is common that the wood is sold over bark but that the price is calculated on a timber volume under bark.</Typography>
                    <Typography variant='h5' style={style}>VIP Service</Typography> <hr />
                    <Typography variant='body2' style={pStyle}>At VIP services,inc.Our reputation continues to grow because we believe that your project is about your VISION.we deliver a quality product,and time and on budget.</Typography>
            </Grid>
          </Grid>
        </Container>
    );
};

export default MeetBenefits;