import React from "react";
import './Service.css'

const Service = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <div class="col">
      <div class="card h-100">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            {description}
          </p>
          <p class="card-text">
            {price}
          </p>
        </div>
        <div class=" rounded mx-auto text-center w-100">
        <button className='btn-book text-white rounded p-2 mx-auto w-100'>Book</button>
        </div>
      </div>
    </div>
  );
};

export default Service;


// onClick={ () => NavigateToServiceDetail(id)}