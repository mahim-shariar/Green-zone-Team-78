import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PurchaseProducts = () => {
    const { productId } = useParams();
    const [purchase, setPurchase] = useState([]);

    useEffect(() => {
        fetch(``)
            .then(res => res.json())
            .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h2>{productId.length}</h2>
        </div>
    );
};

export default PurchaseProducts;