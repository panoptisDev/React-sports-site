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
              <h3 className="card-title text-secondary">Shafiul Islam</h3>
              <p className="card-text fs-4">
                I am a professional sports photographer.I love to take picture
                of beautiful moment of the game you are playing.It was my
                passion from childhood since i love sports and love every moment
                of it.Thats why i wanted to make those moment memorable through
                my lens.I worked hard for that. And still working hard to make
                it big thing for my life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
