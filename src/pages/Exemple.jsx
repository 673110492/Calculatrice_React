import React from 'react';
import image1 from '../assets/image.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image1.jpeg';

const Exemple = () => {
    
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="image 1" />
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100" alt="image 2" />
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100" alt="image 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Exemple;
