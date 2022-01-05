import React from 'react';
import SingleWork from './SingleWork/SingleWork';
import './WorkProcess.css'
import ContactPhone from '@mui/icons-material/ContactPhone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const WorkData = [
    {
        icon:<ContactPhone style={{fontSize:'40px'}} ></ContactPhone>,
        title: "Book Your Service"
    },
    {
        icon:<AddShoppingCartIcon style={{fontSize:'40px'}}></AddShoppingCartIcon>,
        title: "Pack Your Good"
    },
    {
        icon:<LocalShippingIcon style={{fontSize:'40px'}}></LocalShippingIcon>,
        title: "Safe Loading"
    },
    {
        icon:<AirportShuttleIcon style={{fontSize:'40px'}}></AirportShuttleIcon>,
        title: "Safe Delivery"
    }

]


const WorkProcess = () => {
    return (
        <section className="workProcess my-5 ">
            <h1>Our Work Process</h1>
            <p>Its this founding principle that has helped our organisation as well as our clients become a defining force in the industry.</p>
            <div className="work-row">
                {
                    WorkData.map( (data) => <SingleWork data={data}/>)
                }
            </div>
        </section>
    );
};

export default WorkProcess;