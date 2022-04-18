import React from 'react';

const Service = ({service}) => {
    const {name, price,description,  img} = service;
    return (
        <div className='d-flex'>
            <h2>this is service</h2>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
};

export default Service;