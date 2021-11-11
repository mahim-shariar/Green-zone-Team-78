import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addReviews')
            .then(res => res.json())
            .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <h2>Reviews Section  {reviews.length}</h2>
        </div>
    );
};

export default Reviews;