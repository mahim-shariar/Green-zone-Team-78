import React, { useEffect, useState } from 'react';
import SingleManageOrders from './SingleManageOrders';


const ManageAllOrder = () => {
    const [manageOrders, setManageOrders] = useState([]);
    
  
    useEffect(() => {
    const url = 'http://localhost:5000/allorders';
    fetch(url)
      .then(res => res.json())
      .then(data=>setManageOrders(data))
  },[])
    return (
        <div>
            <h2>Manage All Orders: {manageOrders.length}</h2>
            {
                manageOrders.map(manageOrder => <SingleManageOrders
                    manageOrder={manageOrder}
                    key={SingleManageOrders._id}
                ></SingleManageOrders>)
            }
        </div>
    );
};

export default ManageAllOrder;