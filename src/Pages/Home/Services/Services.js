import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="container mt-5">
        <h2 className="text-center mt-5 text-primary ">My Services</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
      </div>
    </div>
  );
};

export default Services;
