import { Container } from '@mui/material';
import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import BestSeller from './BestSeller/BestSeller';
import Video from './Video/Video';

const Demo = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Video></Video>
                <BestSeller></BestSeller>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Demo;