import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Home/Bannner/Banner';
import Contact from './Home/Contact/Contact';
import MeetBenefits from './Home/MeetBenefits/MeetBenefits';
import Products from './Home/Products/Products';
import WorkStage from './Home/WorkStage/WorkStage';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <MeetBenefits></MeetBenefits>
            <Contact></Contact>
            <WorkStage></WorkStage>
        </div>
    );
};

export default Home;