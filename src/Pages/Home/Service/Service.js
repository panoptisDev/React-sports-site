import React from "react";
import './Service.css'

const Service = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description}
          </p>
          <p className="card-text">
            {price}
          </p>
        </div>
        <div className=" rounded mx-auto text-center w-100">
        <button className='btn-book text-white rounded p-2 mx-auto w-100'>Book</button>
        </div>
      </div>
    </div>
  );
};

export default Service;


// onClick={ () => NavigateToServiceDetail(id)}