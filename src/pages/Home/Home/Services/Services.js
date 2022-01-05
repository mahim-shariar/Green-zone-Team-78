import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import Team from '../Team/Team';
// import SingleWork from '../WorksProcess/SingleWork/SingleWork';
import WorkProcess from '../WorksProcess/WorkProcess';
import './Services.css'

const Services = () => {
    return (
        <>
            <Navigation></Navigation>
            <WorkProcess></WorkProcess>
            <Team></Team>
            <Footer></Footer>
        </>
    );
};

export default Services;