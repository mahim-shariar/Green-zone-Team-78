import React from 'react';
import './SingleTeamMember.css'

const SingleTeamMember = (props) => {
    const {image, name,developer,role} = props.data;
    return (
        <div className="team-col">
            <img className='img-fluid rounded ' src={image} alt=""/>
            <h4 className='my-3' >{name}</h4>
            <h6>Developer : {developer} </h6>
            <h6> Team Role : {role} </h6>
        </div>
    );
};

export default SingleTeamMember;