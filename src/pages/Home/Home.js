import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Home/Bannner/Banner';
import Contact from './Home/Contact/Contact';
import Products from './Home/Products/Products';
import Reviews from './Home/Reviews/Reviews';
import WorkStage from './Home/WorkStage/WorkStage';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Contact></Contact>
            <WorkStage></WorkStage>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};
export default Home;