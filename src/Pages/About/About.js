import React from "react";
import about from "../../images/about.jpg";

const About = () => {
  return (
    <div>
      <div className="card mb-3 w-100  my-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={about} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-info">About me</h5>
              <p className="card-text fs-3">
                I am a professional sports photographer.I love to take picture of beautiful moment of the game you are playing.If you want to make a memento,caught the excitement of the game then i am here for you.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
