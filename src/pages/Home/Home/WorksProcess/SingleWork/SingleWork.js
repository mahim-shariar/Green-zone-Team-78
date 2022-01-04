import React from 'react';
import "./SingleWork.css"

const SingleWork = (props) => {
    const {icon, title} = props.data;
    return (
        <div className="work-col">
            <h1 > {icon} </h1>
            <h4>{title}</h4>
        </div>
    );
};

export default SingleWork;