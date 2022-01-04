import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Home/Bannner/Banner';
import Chart from './Home/Chart/Chart';
import Contact from './Home/Contact/Contact';
import Products from './Home/Products/Products';
import Reviews from './Home/Reviews/Reviews';
import WorkStage from './Home/WorkStage/WorkStage';
import { ContactUs } from './Home/ContactUs/ContactUS';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Contact></Contact>
            <WorkStage></WorkStage>
            <Chart></Chart>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};
export default Home;