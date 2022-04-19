import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();

    return (
        <div className='text-center mb-6'>
           <h2 className='text-center my-5'>You have choose package no: {serviceId}</h2>
           <Link to='/checkout'><button className='btn btn-success'>Proceed checkout</button></Link>
        </div>
    );
};

export default ServiceDetails;