import React from "react";
import photo1 from "../../images/gallery/photo1.jpg";
import photo2 from "../../images/gallery/photo2.jpg";
import photo3 from "../../images/gallery/photo3.jpg";
import photo4 from "../../images/gallery/photo4.jpg";
import photo5 from "../../images/gallery/photo5.jpg";
import photo6 from "../../images/gallery/photo6.jpg";

const Gallery = () => {
  return (
    <div className="container">
      <h2 className="text-primary my-5 mx-auto text-center">Gallery</h2>

      <div className="row row-cols-1 row-cols-md-3 g-2 p-1">
          <img style={{width: '320px'}} className="mx-auto col img-fluid" src={photo2} alt="photo2" />
          <img style={{width: '320px'}} className="mx-auto col img-fluid" src={photo3} alt="photo3" />
          <img style={{width: '320px'}} className="mx-auto col img-fluid" src={photo4} alt="photo4" />
          <img style={{width: '320px'}} className="mx-auto col img-fluid" src={photo5} alt="photo5" />
          <img style={{width: '320px'}} className="mx-auto col img-fluid" src={photo6} alt="photo6" />
          <img style={{width: '320px'}} className="mx-auto col img-fluid" src={photo1} alt="photo1" />
      </div>
    </div>
  );
};

export default Gallery;
