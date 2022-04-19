import React from "react";
import { useNavigate } from "react-router-dom";
import './Service.css'

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();
  const navigateToServiceDetails = id => {
      navigate(`/service/${id}`);
  }
  return (
    <div className="col rounded">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description}
          </p>
          <p className="card-text">Price: 
            <span className="fw-bold">{price}</span>
          </p>
        </div>
        <div className=" rounded mx-auto text-center w-100">
        <button onClick={() => navigateToServiceDetails(id)} className='btn-book text-white rounded p-2 mx-auto w-100'>Book</button>
        </div>
      </div>
    </div>
  );
};

export default Service;


